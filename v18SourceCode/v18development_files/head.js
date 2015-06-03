/**
 * Licensed Materials - Property of IBM
 *
 * head.js.ftl
 *
 * (C) Copyright IBM Corporation 2012.
 * U.S. Government Users Restricted Rights:  Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
 

	
	// LOAD DEPENDENT FTLs
	/**
 * Licensed Materials - Property of IBM
 *
 * tester.js.ftl
 *
 * (C) Copyright IBM Corporation 2012.
 * U.S. Government Users Restricted Rights:  Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

	/**
 * Licensed Materials - Property of IBM
 *
 * config.js.ftl
 *
 * (C) Copyright IBM Corporation 2012.
 * U.S. Government Users Restricted Rights:  Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */


var $f181 = function()
{
	var $v29 = { // USED BY PARTNER ENABLEMENT CODE
			
			
			
			
			
			
			
			
			
			
			
		
		P$0: !1 // FILLER ENTRY FOR THE END
	}
	
	var hmTagsNotHonoringDNT = {
	}
	
	var ieHonorDNT = !1;
	var otherHonorDNT = !1;
	
	var $v725 = []; // CACHE PARSING OF JS EXPRESSIONS
	var $v748 = {"[":1, "]":1, ".":1, "'":1, "\"":1}; // USED IN PARSING OF JS EXPRESSIONS	
	var $v340 = { "+":1, "-":1, "/":1, "!":1, "*":1, "%":1, "^":1, "&":1, "|":1, "<":1, ">":1, " ":1, "\t":1 }; // USED IN PARSING OF JS MODIFIERS

	CM_DDX.auditReplace = 1; //This is a dummy variable to support search and replace in the generated script file
	CM_DDX.auditEnabled = !0;
	CM_DDX.auditElementAttribute1 = 16;
	CM_DDX.auditElementAttribute2 = 17;
	CM_DDX.auditReplace = 0;

	/**
	 * Public functions accessible externally
	 */
	var $f169 = {

		/**
		 * @return	The dynamic value of the page identifier as the user navigates from page to page on the customer's site 
		 */
		getPageIdentifier: function()
		{
			return ($f181.$v666("J",
"WebAnalytics.Page.PageIdentifier" //$NO-OBF
) === null) ? eval("WebAnalytics.Page.PageIdentifier") //$NO-OBF
 : ""+$f181.$v666("J",
"WebAnalytics.Page.PageIdentifier" //$NO-OBF
); //$NO-OBF
		},
		
		/**
		 * Indicates whether a partner is enabled or not
		 */
		$v869: function($v201)
		{
			return $v29["P$" + $v201];
		},
		
		isTagSyndicationAllowed: function($v201, tagId)
		{
			//Check whether to always allow syndication
			if (hmTagsNotHonoringDNT[tagId])
			{
				return !0;
			}

			//Check whether the user has set do not track
			if (CM_DDX.privacy.isDoNotTrackEnabled($v201))
			{
				return !1;
			}
			
			//Check the browser do not track settings
            if (navigator.msDoNotTrack && navigator.msDoNotTrack == 1 && ieHonorDNT)
            {
	            return !1;
            }
            if (navigator.doNotTrack && (navigator.doNotTrack == "yes" || navigator.doNotTrack == "1") && otherHonorDNT)
            {
	            return !1;
            }
			
			return !0;
		},
		
		/**
		 * Determines if a tag parameter exists; always TRUE for C and X (and computed for H, J, U, K, L, S if the dependency can be resolved)
		 */
		doesParameterExist: function($v592)
		{
			var sa = $v592.split("\x01");
			return (sa.length === 3) ? $f169.$v666(sa[0], sa[2]) === null : $f169.$v666(sa[0], sa[2], sa[3]) === null; 
		},
		
		/**
		 * A cross between 'doesParameterExist' and '$v666' in that it returns the missing parameter's reason
		 */
		$v302: function($v592)
		{
			var sa = $v592.split("\x01");
			return (sa.length === 3) ? $f169.$v666(sa[0], sa[2]) : $f169.$v666(sa[0], sa[2], sa[3]); 
		},
		
		/**
		 * Extracts a tag parameter value for H, J, U, C and X types
		 */
		getParameterValue: function($v592)
		{
			var sa = $v592.split("\x01");
			if (sa[0] === "H")
			{
				return (sa[2].charAt(0) === '#')
					? (sa.length === 3 ? $f169.$v645(sa[2].substring(1)) : $f169.$v645(sa[2].substring(1), sa[3]))
					: (sa.length === 3 ? $f169.$v820(sa[2]) : $f169.$v820(sa[2], sa[3]));
			}
			else 
			if (sa[0] === "U")
			{
				return CM_DDX.gup(sa[2]);
			}
			else if (sa[0] === "J" || sa[0] === "1")
			{
				try {
					return $f169.$v613(sa[2]); // ROHIT: TM-385 (PERF IMPROVEMENT)
				} catch (sErr)
				{
					$f180.$f124(sErr);
					return null;
				}
			}
			else if (sa[0] === "C")
			{
				return sa[2];
			}
			else if (sa[0] === "K")
			{
				return cI(sa[2]);
			}
			else if (sa[0] === "L")
			{
				return localStorage[sa[2]];
			}
			else if (sa[0] === "S")
			{
				return sessionStorage[sa[2]];
			} 
			else if (sa[0] === "M" || sa[0] === "2")
			{
				return $f169.$v53(sa[2]);
			}
			else
			{
				return null;
			}
		},
		
		/**
		 * Evaluates a tag parameter value (assuming it could be found on the page) and applies the modifier
		 */
		$v477: function($v758, $v901, $v332)
		{
			if ($v758 !== null)
			{
				return $v758;
			}
			if (!$v332)
			{
				return $v901;
			}
			var $v152 = $v332.replace(/@/g, $v901 + ""); // FIX FOR TM-538
			try {
				return eval($v152);
			} catch ($v952)
			{
				return "\x01" + $v952;
			}
		},

		/**
		 * @param	$v190		H=html, J=javscript, U=urlparam, C=constant, X=unbound
		 * @param	$v671
		 * @param	$v614
		 *
		 * @return	null if the document exists; Text with an error message if the element doesn't
		 */
		$v666: function($v190, $v671, $v614)
		{
			if ($v190 === "H")
			{
				if ($v671 !== null && $v671.length > 0)
				{
					var $v240 = ($v671.charAt(0) === "#");
					var o = $v240 ? $f169.$v694($v671.substring(1)) : document.getElementById($v671);
					if (!o && !$v240)
					{
						var sa = document.getElementsByName($v671);
						if (sa.length > 0)
						{
							o = sa[0];
						}
					}
					if (o === null) 
					{
						return $v240 ? "\x01NO_SUCH_XPATH_ELEMENT" : "\x01NO_SUCH_DOM_ELEMENT";
					}
					if ($v614 !== null && typeof($v614) !== "undefined" && !$f169.hasAttribute(o, $v614) && $v614 !== "innerHTML")
					{
						return "\x01NO_SUCH_DOM_ATTRIBUTE";
					}
				}
				else
				{
					return "\x01INVALID_DOM_ELEM_SPECIFIER";
				}
			}
			else if ($v190 === "J" || $v190 === "1")//JSO, Adobe
			{
				try
				{
					//jaya:tm-93 and tm-112 && tm-104
					if ($f169.$v613($v671) === undefined) // ROHIT: TM-385 (PERF IMPROVEMENT)
					{ 
						return "\x01NO_SUCH_JS_VARIABLE";
					}
				}
				catch(e)
				{
					return "\x01NO_SUCH_JS_VARIABLE";
				}
			}
			else if ($v190 === "K" && !cI($v671)) 
			{
				return "\x01NO_SUCH_JS_VARIABLE";
			}
			else if ($v190 === "L")
			{
				if (CM_DDX.localStorage === !1)
				{
					return "\x01LS_NOT_SUPPORTED";
				}
				else if (CM_DDX.localStorage === undefined)
				{
					try {
			            localStorage.setItem("!@#$%", "!@#$%");
			            localStorage.removeItem("!@#$%");
						CM_DDX.localStorage = !0;
					}
					catch (sErr)
					{
						CM_DDX.localStorage = !1;
						return "\x01LS_NOT_SUPPORTED";
					}
				}
				
				if (!localStorage[$v671])
				{
					return "\x01NO_SUCH_LS_VARIABLE";
				}
			}
			else if ($v190 === "S")
			{
				if (CM_DDX.sessionStorage === !1)
				{
					return "\x01SS_NOT_SUPPORTED";
				}
				else if (CM_DDX.sessionStorage === undefined)
				{
					try {
			            sessionStorage.setItem("!@#$%", "!@#$%");
			            sessionStorage.removeItem("!@#$%");
						CM_DDX.sessionStorage = !0;
					}
					catch (sErr)
					{
						CM_DDX.sessionStorage = !1;
						return "\x01SS_NOT_SUPPORTED";
					}
				}
				
				if (!sessionStorage[$v671])
				{
					return "\x01NO_SUCH_SS_VARIABLE";
				}
			}
			else if ( ($v190 === "M" || $v190 === "2") && $f169.$v53($v671) === null) //Meta OR Webtrends
			{
				return "\x01NO_SUCH_META_TAG";
			}
			else if ($v190 === "U")
			{
				if (CM_DDX.gup($v671) === null)
				{
					return "\x01NO_SUCH_URL_PARAMETER";
				}
			}
			// ALL OTHERS EXIST
			return null;
		},
		
		/**
		 * To get the value of <meta> HTML tags for the following 3 cases:
		 * Case 1: Only check for "name" attribute to get "content" attribute's value
		 * Case 2: To get the value of specified token's (attribute's) value for first <meta> tag
		 * Case 3: To get the value of specified token's (attribute's) value for matching attribute-value string specified.
		 */
		$v53: function(sName)
		{
			var $v5 = document.getElementsByTagName('meta');
			if ($v5 == null || $v5.length === 0)
			{
				return null;
			}
			if (sName.indexOf("?") === -1) // Case 1: Only check for "name" attribute to get "content" attribute's value
			{
				for (var m = 0; m < $v5.length; m++)
  				{
   					if ($f169.getAttribute($v5[m], "name") === cmUtils.string.trim(sName))
   					{
   						return $f169.getAttribute($v5[m], "content");
   					}
  				}	
			}
			else
			{
				oaTokens = sName.split("?");
				if (oaTokens.length === 2) // Case 2: To get the value of specified token's (attribute's) value for first <meta> tag
				{
					for (var m = 0; m < $v5.length; m++)
					{
						var sVal = $f169.getAttribute($v5[m], cmUtils.string.trim(oaTokens[1]));
						if (sVal != null)
						{
							return sVal;
						}
					}
				}
				else if (oaTokens.length === 3) // Case 3: To get the value of specified token's (attribute's) value for matching attribute-value string specified.
				{
					var oaAttrVal = cmUtils.string.trim(oaTokens[1]).split("=");
					for (var m = 0; m < $v5.length; m++)
					{
						var sVal = $f169.getAttribute($v5[m], oaAttrVal[0]);
						if (sVal != null)
						{
							if (sVal === cmUtils.string.trim(oaAttrVal[1]))
							{
								return $f169.getAttribute($v5[m], oaTokens[2]);
							}
						}
					}
				}
			}
  			return null;
		},
		
		/**
		 * Indicates whether an attribute exists for a DOM element or not
		 */
		hasAttribute: function(o, $v977)
		{
			if (!$v977)
			{
				return !1;
			}
			if (o.hasAttribute)
			{
				return o.hasAttribute($v977.toLowerCase());
			}
			else
			{
				return (o.attributes[$v977] || o.attributes[$v977.toLowerCase()]);
			}
		},
		
		/**
		 *
		 */
		$v766: function(oValue)
		{
			if (typeof(oValue) === "string")
			{
				oValue = oValue.toLowerCase();
				if (oValue === "true" //$NO-OBF
				 || oValue === "yes" || oValue === "1")
				{ 
					return !0;
				}
				else if (oValue === "false" //$NO-OBF
				 || oValue === "no" || oValue === "0")
				{ 
					return !1;
				}
			}
			else if (typeof(oValue) === "boolean")
			{
				return oValue;
			}
			else if (typeof(oValue) === "number")
			{
				if (oValue === 1)
				{ 
					return !0;
				}
				else if (oValue === 0)
				{ 
					return !1;
				}
			}
			return undefined;
		},
		
		/**
		 *
		 */
		$v151: function(oValue)
		{
			return $f169.$v766(oValue) != undefined;
		},

		/**
		 *
		 */
		$v44: function(oValue)
		{
			return (parseInt(oValue) === oValue * 1) ? oValue * 1 : undefined;
		},
		
		/**
		 *
		 */
		$v348: function(oValue)
		{
			return (!isNaN(oValue) && typeof(oValue) != "boolean") ? oValue * 1 : undefined;
		},
		
		/**
		 * Convenient function that returns the value extracted from an HTML element identified by the DOM id and an optional attribute.
		 *
		 * @param	$v16		The DOM id of the HTML element to be searched for (we also search dom elements by name e.g. for forms).
		 * @param	$v977	The attribute of the element from which a text value is extracted. For $v977='innerHTML', you may pass in a blank value.
		 *
		 */
		$v820: function($v16, $v977)
		{
			if ($v16 !== null && $v16.length > 0)
			{
				var o = document.getElementById($v16);
				if (!o)
				{
					var oa = document.getElementsByName($v16); // FOR FORMS, PEOPLE REFERENCE BY NAME
					if (oa.length > 0)
					{
						o = oa[0];
					}
				}
				return $f169.getAttribute(o, $v977);
			}
			return null;
		},

		/**
		 * Convenient function that returns the value extracted from an HTML element identified by an xpath definition and an optional attribute.
		 *
		 * @param	$v618		The xpath definition using which the element may be identified. If multiple elements match the path, the first one will be selected.
		 * @param	$v977	The attribute of the element from which a text value is extracted. For $v977='innerHTML', you may pass in a blank value.
		 *
		 * Note: Sample xpath args that work for both browsers for product.html are: "#//body/table/tbody/tr/td", "prodID"
		 * We also require to include html-xpath.js for IE5+ xpath introspection support
		 */
		$v645: function($v618, $v977)
		{
			if ($v618 !== null && $v618.length > 0)
			{
				return $f169.getAttribute($f169.$v694($v618), $v977);
			}
			return null;
		},

		/**
		 * Returns a DOM element on the page corresponding to the requested Xpath
		 */
		$v694: function($v618)
		{
			var xh = null;
			try // NEWER BROWSERS
			{
				xh = new XMLHttpRequest();
			}
			catch (ex1)
			{
				try // OLDER BROWSERS: IE5, IE6
				{
					xh = new ActiveXObject("Microsoft.XMLHTTP");
				}
				catch (ex2)
				{
				}
			}
			if (xh === null) // STILL UNRESOLVED
			{
				//alert("Couldn't initialize XMLHttpRequest intance.");
				return null;
			}
			try // TRY TO EXTRACT THE ELEMENT FROM THE DOM; ON ERROR, RETURN NULL
			{
				var o = document.evaluate ? document.evaluate($v618, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null) : null;
				if (o === null) 
				{
					return null;
				}

				try
				{
					return o.getSingleNodeValue ? o.getSingleNodeValue() : o.singleNodeValue;
				}
				catch (exWebKit)
				{
					try
					{
						return o.iterateNext();
					}
					catch (exUnknown)
					{
						return null;
					}
				}
			}
			catch (ex2)
			{
				var sErr = ex2.message;
				return null;
			}
		},

		/**
		 * Returns the attribute's value for a DOM element.
		 * Also handles null attributes as innerHTML
		 */
		getAttribute: function($v492, $v614)
		{
			if ($v492 !== null)
			{
				if (!$v614 || $v614 === "innerHTML")
				{ 
					return $v492.innerHTML;
				}
				else
				{
					if ($v492.getAttribute) //IE7 check
					{
						return $v492.getAttribute($v614.toLowerCase());
					}
					else
					{
						return ($v492.attributes[$v614]) ? $v492.attributes[$v614] : $v492.attributes[$v614.toLowerCase()];
					}
				}
			}
			return null;
		},
		
		/**
		 * Evaluates a JS expression by splitting it into tokens and using window[][][] and avoiding use of eval()
		 */
		$v613: function($v152)
		{
			var $v673 = $f169.$v962($v152);
			if ($v673.length === 0)
			{
				return undefined;
			}
			var o = window;
			for (var i = 0; i < $v673.length; i++)
			{
				o = o[$v673[i].replace(/\\\"/g, "\"").replace(/\\\'/g, "\'")];
				if (o === null || o === undefined)
				{
					return o;
				}
			}
			return o;
		},

		/**
		 * Parses a JS expression (e.g. abc["def"].ghi) into a window["abc"]["def"]["ghi"]... format for more efficient evaluation than eval
		 */
		$v962: function(sValue)
		{
			if ($v725[sValue] !== undefined) // PREVIOUSLY PARSED AND CACHED
			{
				return $v725[sValue];
			}
			var $v673 = [];
			var ch, $v927, $v79 = "", $v534 = !1, $v184 = !0, $v366 = null, $v943 = null, $v794 = null;
			for (var i = 0; i < sValue.length; i++)
			{
				ch = sValue.charAt(i);
				$v534 = ($v943 === '\\');
				$v255 = !1;
				if (ch === '"' || ch === "'")
				{
					if ($v794 === null)
					{
						$v794 = ch;
						$v255 = !0;
					}
					else
					{
						if ($v794 === ch)
						{
							$v794 = null;
							$v255 = !0;
						}
					}
				}
				$v927 = $f169.$v362(ch, $v534, $v366, $v255, $v794);
				if ($v927 != null)
				{
					if (!$v534)
					{
						if ($v927 === 'S')
						{
							$v366 = ch;
						}
						if ($v927 === 'E' || $v79.length > 0)
						{
							if ($v79.length > 0)
							{
								$v673[$v673.length] = $v79;
							}
							$v79 = "";
							$v366 = $v184 ? ch : null;
							$v184 = !1;
						}
					}
				}
				else
				{
					if (!$v255)
					{
						$v79 += ch;
					}
				}
				$v943 = ch;
			}
			$v79 = $v79.replace(/\"/g, "\\\"").replace(/\\/g, "\\\\");
			if ($v79.length > 0)
			{
				$v673[$v673.length] = $v79;
			}
			$v725[sValue] = $v673;
			return $v673;
		},
		
		/**
		 * Parses JS expressions (all except except abc().def().ghi types) and extracts a unique list of function references 
		 */
		$v293: function(sExpr)
		{
			if ($v725["@F:" + sExpr] !== undefined) // PREVIOUSLY PARSED AND CACHED
			{
				return $v725["@F:" + sExpr];
			}
			var $v731 = new $f165(); // THE UNIQUE LIST OF FUNCTION NAMES EXTRACTED
			if (!sExpr)
			{
				$v725["@F:" + sExpr] = $v731;
				return $v731;
			}
			var $v429 = !0, $v236 = !1;
			var $v79 = "", ch, $v943, $v539 = null;
			for (var i = 0; i < sExpr.length; i++) // LOOP TO ITERATE THROUGH EACH CHAR IN THE EXPRESSION
			{
				ch = sExpr.charAt(i);
				$v236 = $v943 === '\\'; // IF THE LAST CHAR WAS A BACKSLASH
				if (!$v236 && (ch === '"' || ch === '\'')) // IF THE CURRENT CHAR IS ' OR " AND NOT ESCAPED
				{
					if ($v539 === null) // START QUOTE MARKER
					{
						$v539 = ch;
					}
					else if ($v539 === ch) // END QUOTE MARKER; TOGGLE STATE BACK
					{
						$v539 = null;
					}
				}
				$v429 = ($v340[ch] !== undefined && $v539 === null); // DETECT A BREAK TOKEN
				if (ch === '(' && $v539 === null) // DETECT AN OPEN PARENTHESIS; EXISTING TOKEN (IF NOT EMPTY) IS FUNCTION
				{
					if (!$v731.contains($v79) && isNaN($v79) && $v79.length > 0 && $v79.charAt(0) !== '"' && $v79.charAt(0) !== '\'' && $v79.indexOf(")") === -1)
					{
						$v731.add($v79); // ADD TO HASHSET (JS ASSOC ARRAY) OF FUNCTIONS
					}
					$v429 = !0;
				}
				if (!$v429) // IF THIS ISN'T A DELIMITER, ADD TO TOKEN
				{
					$v79 += ch;
				}
				else // WHEN A DELIMITER IS DETECTED, RESET TOKEN
				{
					$v79 = "";
				}
				$v943 = ch; // REMEMBER LAST CHAR FOR ESCAPED 
			}
			$v725["@F:" + sExpr] = $v731;
			return $v731;
		},

		/**
		 *
		 */
		$v362: function(ch, $v534, $v366, $v255, $v794)
		{
			if ($v748[ch])
			{
				if ($v794 !== null)
				{
					return null;
				}

				if (!$v534 && ((($v366 === null && ch !== ']') || ch === '[') && ch !== ']'))
				{
					return 'S';
				}

				if (
						(
							($v366 === '"' && ch === '"') || 
							($v366 === '\'' && ch === '\'') ||
							(($v366 === null || $v366 === '[') && ch === ']') ||
							(/*$v366 === null &&*/ ch === '.') // COMMENTED OUT SO abc.def.ghi WOULD WORK
						) && !$v534
					)
				{
					return 'E';
				}
			}
			return null;
		}
	}

	return $f169;
}();
	/**
 * Licensed Materials - Property of IBM
 *
 * common.js.ftl
 * Included both by the synchronously loaded / executed container as well as the asynchronously loaded c[x]p[t] rules files.
 * Contains common functions used by both workflows.
 *
 * (C) Copyright IBM Corporation 2012.
 * U.S. Government Users Restricted Rights:  Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */


var $f180 = new function() 
{ 
	/**
	 *
	 */
	var $f112 = [],
		$v847 = [], // USED FOR CACHING TAG RULE CONDITIONS 
		loUtcInMillis; // DEDUCD TIME IN UTC / MILLIS USED FOR ACTIVATION / DEACTIVATION CALCS
	
	/**
	 * Store the vendor maps with the mapping as the key and the vendor id as the value
	 */
	var $v474 = {
		$v850: -1
	};
	
	/**
	 * Public functions accessible externally
	 */
	var $f169 = {
	
		/**
		 * Conveniently detects if the element in question exists or not
		 */
		$v273: function(s, t)
		{
			if (s.length > 0 && s.charAt(0) === '\x02')
			{
				s = s.substring(1);
				var sa = s.split("\x01");
				var $v368 = (sa.length === 3) 
					? $f181.$v666(sa[0], sa[2]) 
					: $f181.$v666(sa[0], sa[2], sa[3]); 
				if ($v368)
				{
					return $v368;
				}
				else
				{
					$v368 = $f181.getParameterValue(s);
					if (t === $f166.BOOLEAN)
					{
						$v368 = $f181.$v766($v368);
					}
					else if (t === $f166.NUMERIC)
					{
						$v368 = $f181.$v348($v368);
					}
					else if ($v368) // CONVERT TO TEXT
					{
						$v368 = "" + $v368;
					}
					return $v368;
				}  
			}
			else
			{
				return s;
			}		
		},
		
		/**
		 * Works in conjunction with $v273 (above)
		 */
		$v649: function(s)
		{
			return (s && typeof(s) === "string" && s.length > 0 && s.charAt(0) === "\x01");
		},
		
	
	
	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		/**
		 * Array contains value?
		 */
		$v476: function(oa, o)
		{
			for (var i = 0; i < oa.length; i++)
			{
				if ((oa[i] + "").toLowerCase() === (o + "").toLowerCase())
				{
					return !0;
				}
			}
			return !1;
		},
		
		/**
		 *
		 */
		recordPartnerFromVCPIVendor: function()
		{
			var vcpi = "";
			try 
			{
				vcpi = _cmPartnerUtils.parseVCPI(document.URL);
				if (vcpi === "")
				{
					vcpi = _cmPartnerUtils.parseVCPI(document.referrer);
				}
				
				//Now that we have the vcpi. The item at index 1 should be the vendor
				//Ensure that we have vcpi to begin with
				if (vcpi !== "" && vcpi.length > 1)
				{
					//Check whether the vendor is mapped
					var $v253 = $v474[vcpi[1].toLowerCase()];
					if (typeof($v253) !== "undefined")
					{
						CM_DDX.setSubCookie("CM_DDX", "pla" + $v253,  new Date().getTime(), 365);
					}
				}
			} 
			catch (sErr)
			{
				$f180.$f124(sErr);
			}
		},
		
		/**
		 * Calculates the duration in days from the current time to when this partner was last accessed by the user who came to this page
		 */
		$v233: function($v253)
		{
			var $v405 = 24 * 60 * 60 * 1000;
			var idt = cI("CM_DDX", "pla" + $v253);
			if (idt === null)
			{
				return -1;
			}
			
			try
			{
				return (new Date().getTime() - parseInt(idt)) / $v405;
			}
			catch(e)
			{
				return -1;
			}
		},
		
		hasPartnerBeenAccessedIn: function($v253, numDays)
		{
			var days = $f169.$v233($v253);
			
			return (days != -1 && days < numDays);
		},
		
		/**
		 * Accumulates errors (as strings) to be consumed while debugging
		 */
		$f124: function(sErr)
		{
			$f112[$f112.length] = sErr;
		},
		
		/**
		 * Returns all accumulated errors captured while viewing the page
		 */
		$f113: function()
		{
			return $f112;
		},
		
		/**
		 * Logs the state of the rule for subsequent evaluation
		 */
		$v662: function($v921, $v562)
		{
			if (!$v847[$v921])
			{
				$v847[$v921] = $v562;
			}
		},
		
		/**
		 * Determines if a tag satisfies rule conditions or not.
		 */
		$v92: function($v339)
		{
			if ($v339.length === 0)
			{
				return !0;
			}
			var dt = new Date(), sDoesntExist; // CURRENT TIME
			loUtcInMillis = Date.UTC( // CONVERTED TO UTC
				dt.getFullYear(), dt.getMonth(), dt.getDate(), 
				dt.getHours(), dt.getMinutes(), dt.getSeconds(), dt.getMilliseconds()
			);
			for (var i = 0; i < $v339.length; i++)
			{
				if ($v847[$v339[i]] === !1) // REFERRAL RULES WERE PREVIOUSLY EXECUTED AND CACHED
				{
					return !1;
				}
				else
				{
					sDoesntExist = eval($v847[$v339[i]]);
					if (typeof(sDoesntExist) === "string")
					{
						return sDoesntExist;
					}
					else if (sDoesntExist === !1)
					{
						return !1;
					}
				}
			}
			return !0;
		},
		
		/**
		 * Appends all rule ids from ia2 into ia1
		 */
		$v299: function(ia1, ia2)
		{
			var len1 = ia1.length;
			var len2 = ia2.length;
			for (var i = 0; i < len2; i++)
			{
				ia1[len1 + i] = ia2[i];
			}
		},
		
		/**
		 * Determines if embedded JS functions referenced by the tag parameter's modifier exist or not.
		 * The list of found and not found function names are returned deduped in a hashset contained within the 'fe' parameter.
		 */
		$v637: function($v332, fe)
		{
			fe.modifier = $v332;
			var $v290 = $f181.$v293($v332);
			for (var $v502 in $v290.elements())
			{
				if ($v290.$f128($v502))
				{
					if (typeof(window[$v502]) === "function") // TM-538: FIX FROM !== to ===
					{
						fe.found.add($v502);
					}
					else
					{
						fe.$v649.add($v502);
					}
				}
			}
		},
		
		/**
		 *
		 */
		$v861: function(sUrl, fnCallback)
		{
			var l = document.createElement("link");
			l.setAttribute("rel", "stylesheet");
			l.setAttribute("type", "text/css");
			l.setAttribute("href", sUrl);
			document.getElementsByTagName("head")[0].appendChild(l);
			if (fnCallback)
			{
				if (l.readyState)
				{
					l.onreadystatechange = function() 
					{
						fnCallback();
					}
				}
				else
				{
					l.onload = function()
					{
						fnCallback();
					}
				}
				
			}
		},
		
		/**
		 * The datetime id formatted as YYYYMMDDHHmmsskkk
		 */
		$f121: function()
		{
			var dt = new Date();
			var $f122 = dt.getFullYear();
			var fnPad2 = function(v) { return (v < 10) ? "0" + v : "" + v; }
			var fnPad3 = function(v) { return (v < 10) ? "00" + v : ((v < 100) ? "0" + v : "" + v); }
			$f122 += fnPad2(dt.getMonth() + 1);
			$f122 += fnPad2(dt.getDate());
			$f122 += fnPad2(dt.getHours());
			$f122 += fnPad2(dt.getMinutes());
			$f122 += fnPad2(dt.getSeconds());
			$f122 += fnPad3(dt.getMilliseconds());
			return $f122;
		},
		
		/**
		 *
		 */
		$v465: function($v513)
		{
			return $v513 ? encodeURIComponent($v513) + "=" + (+new Date()) : +new Date();
		},
		
		/**
		 * Converts values from an associative array to a regular array 
		 */
		$v456: function(hm)
		{	
			var oa = [];
			for (var k in hm)
			{	
				if (hm.hasOwnProperty(k))
				{
					oa[oa.length] = hm[k];
				}
			}
			return oa;
		},
		
		/**
		 * Converts a {found: __$hashmap, $v649: __$hashmap} structure to an array of "<mfunction>=<0|1>" elements
		 */
		$v931: function(fe)
		{
			var sa = [];
			var hs = fe.found;
			for (var k in hs.elements())
			{	
				if (hs.$f128(k))
				{
					sa[sa.length] = k + "=1";
				}
			}
			hs = fe.$v649;
			for (var k in hs.elements())
			{	
				if (hs.$f128(k))
				{
					sa[sa.length] = k + "=0";
				}
			}
			return sa;
		}
	}
	return $f169;
}();
	
/**
 * Constants stored in this namespace
 */
var $f166 = function()
{
	/**
	 * Public namespaced constants accessible externally
	 */
	var $f169 = {
		
		// PARTNERS
		IBM_COREMETRICS: 1,
		IBM_UNICA: 2,
		IBM_TEALEAF: 3,
		CHANGO: 100,
		SEEWHY: 101,
		CLICKTALE: 102,
		FORESEE: 103,
		ACCENTURE_ADO: 104,
		EVIDON: 106,
		THIRTY_THREE_ACROSS: 108,
		AGGREGATE_KNOWLEDGE: 109,
		REEVOO: 110,
		BIZO: 111,
		TRADE_DESK:112,
		ADROLL:114,
		PUBMATIC:115,
		BLUEKAI:116,
		DIGILANT:117,
		GOOGLE_ADWORDS:118,
		DOUBLE_CLICK_FLOODLIGHT:119,
		OPINION_LAB:120,
		BAZAAR_VOICE_ROI_BEACON_V1:121,
		BAZAAR_VOICE_ROI_BEACON_V2:122,
		X_PLUS_1:123,
		TURN:124,
		EXTENDED_PARTNER_ID_START: 1000,
		
		// PAGE STATE
		IDLE: 0,
		INITIALIZED: 1,
		IN_HEAD: 2,
		BODY_STARTED: 3,
		BODY_ENDED: 4,
		DOM_READY: 5,
		
		// FREQUENCIES IN MILLISECONDS
		BODY_STATE_CHECK_FREQUENCY: 100,
		PARAMETER_LIST_BREAK_COUNT: 5000,
		IMMEDIATELY: 0,
		
		// REEVOO POSITIONING
		AFTER: "AFTER",
		BEFORE: "BEFORE",
		CHILD: "CHILD",
		
		// DATA TYPES
		TEXT: 1,
		NUMERIC: 2,
		BOOLEAN: 4,
		
		NOT_YET: "\x01NOT_YET"
	}
	
	return $f169;	
}();

/**
 * The homegrown hashset constructor
 */
function $f165()
{
	this.$f129 = [];
	this.count = 0; 
}

/**
 * Indicates if a hashset instance contains a specific value
 */
$f165.prototype.contains = function(sValue)
{
	return this.$f129[sValue] === !0;
}

/**
 * Adds an element to a hashset instance
 */
$f165.prototype.add = function(sValue)
{
	if (this.$f129[sValue] === !0) return !1;
	this.$f129[sValue] = !0; 
	this.count++;
	return !0;
}

/**
 * Adds multiple entries from a hashset to this hashset instance
 */
$f165.prototype.$v581 = function(hs)
{
	for (var k in hs.elements())
	{
		if (hs.$f128(k))
		{
			this.add(k);
		}
	}
}

/**
 * Removes an element from the hashset instance
 */
$f165.prototype.remove = function(sValue)
{
	if (typeof(this.$f129[sValue]) === "undefined") return !1;
	this.count--;
	delete this.$f129[sValue];
	return !0;
}

/**
 * Removes all elements from the hashset in one swoop
 */
$f165.prototype.clear = function()
{
	this.$f129 = [];
	this.count = 0;
}

/**
 * Indicates whether this hashset is empty
 */
$f165.prototype.isEmpty = function()
{
	return this.count === 0;
}

/**
 * Returns the internal $f129 needed for for-in iteration
 */
$f165.prototype.elements = function()
{
	return this.$f129;
}

/**
 *
 */
$f165.prototype.$f130 = function()
{
	var sa = [];
	for (var $f115 in this.$f129)
	{
		if (this.$f128($f115))
		{
			sa[sa.length] = $f115;
		}
	}
	return sa;
}

/**
 * Returns the number of elements in the hashset
 */
$f165.prototype.size = function()
{
	return this.count;
}

/**
 * When iterating through for-in loops, use this method to exclude prototype entries
 */
$f165.prototype.$f128 = function(sValue)
{
	return this.$f129.hasOwnProperty(sValue);
}

/**
 * The homegrown countermap constructor
 */
function $f172()
{
	this.$f129 = [];
	this.count = 0; 
}

/**
 * Indicates if a countermap instance contains a specific value
 */
$f172.prototype.contains = function(sValue)
{
	return this.$f129[sValue] !== undefined;
}

/**
 * Adds an element to a countermap instance
 */
$f172.prototype.add = function(sValue)
{
	var iCount = this.$f129[sValue];
	if (iCount === undefined)
	{
		this.$f129[sValue] = 1;
		this.count++;
	}
	else
	{
		this.$f129[sValue] = iCount + 1;
	}
}

/**
 * Removes an element from the countermap instance
 */
$f172.prototype.remove = function(sValue)
{
	var iCount = this.$f129[sValue];
	if (iCount !== undefined)
	{
		if (iCount > 1)
		{
			this.$f129[sValue] = iCount - 1;
		}
		else
		{
			this.count--;
			delete this.$f129[sValue];
		}
	}
}

/**
 * Removes an element from the countermap instance
 */
$f172.prototype.$f179 = function(sValue)
{
	var iCount = this.$f129[sValue];
	if (iCount !== undefined)
	{
		this.count--;
		delete this.$f129[sValue];
	}
}

/**
 * Removes all elements from the hashset in one swoop
 */
$f172.prototype.clear = function()
{
	this.$f129 = [];
	this.count = 0;
}

/**
 * Indicates whether this hashset is empty
 */
$f172.prototype.isEmpty = function()
{
	return this.count === 0;
}

/**
 *
 */
$f172.prototype.$f174 = function()
{
	var sa = [];
	for (var $f115 in this.$f129)
	{
		if (this.$f129.hasOwnProperty($f115))
		{
			sa[sa.length] = $f115;
		}
	}
	for (var i = 0; i < sa.length - i; i++)
	{
		for (var j = i + 1; j < sa.length; j++)
		{
			if (this.$f129[sa[i]] < this.$f129[sa[j]])
			{
				var k = sa[i];
				sa[i] = sa[j];
				sa[j] = k;
			}
		}
	}
	return sa;
}

/**
 * The homegrown geometric progression constructor
 */
function $f173(iFirst, $f177, $f178)
{
	this.$f176 = iFirst;
	this.$f177 = $f177;
	this.$f178 = $f178;
}

/**
 * The next value to return
 */
$f173.prototype.$f175 = function()
{
	var iValueToReturn = this.$f176;
	this.$f176 *= this.$f177;
	if (this.$f176 > this.$f178)
	{
		this.$f176 = this.$f178;
	}
	return iValueToReturn;
}

	/**
 * Partner settings, wrapper functions, etc
 */
		var __$partnerHead = new function()
	{
		/**
		 * Public functions accessible externally
		 */
		var $f169 = {
		
			/**
 * Licensed Materials - Property of IBM
 *
 * pef.js.ftl
 *
 * (C) Copyright IBM Corporation 2013.
 * U.S. Government Users Restricted Rights:  Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

// BLOCK OF REUSABLE CODE TO INVOKE PEF PREREQUISITES FOR DIFFERENT SECTIONS / EVENTS

/**
 * Invoked once (by head and pg) to inject partner extension functions into the CM_DDX namespace 
 */
$v917: function()
{
	 // EACH PARTNER (ASSOCIATED WITH PGS DEPLOYED)
		// INITIALIZE THE NAMESPACE FOR THIS EXTENDED PARTNER
		if (typeof(CM_DDX.partner.$1082) === "undefined") //$NO-OBF
		{
			CM_DDX.partner.$1082 = { id: 1082} //$NO-OBF
		}
		
		//Add settings into the object
		if (typeof(CM_DDX.partner.$1082.settings) === "undefined") //$NO-OBF
		{
			CM_DDX.partner.$1082.settings = {staging:{}, production:{} }; //$NO-OBF
		}
						CM_DDX.partner.$1082.settings.
							production
						["account_uid"] =  //$NO-OBF
							"rYm5PMoT"; //$NO-OBF
		
		//Add deployment time variables
		if (typeof(CM_DDX.partner.$1082.dataVars) === "undefined") //$NO-OBF
		{
			CM_DDX.partner.$1082.dataVars = {}; //$NO-OBF
		}
		
		 // EACH JS FUNCTION
			// INJECT THE FUNCTION 
		 	if (typeof(CM_DDX.partner.$1082["db_LoadLibrary"]) === "undefined") //$NO-OBF 
		 	{
		 		CM_DDX.partner.$1082["db_LoadLibrary"] = function() //$NO-OBF
		 		{
			 				if (typeof(this.settings.production.account_uid)=="string"){ // $NO-OBF
			 				window.ddx_DemandbaseUID=this.settings.production.account_uid; // $NO-OBF
			 				} else if (typeof(digitalData.page.pageInfo.attributes.Demandbase)=="string"){ // $NO-OBF
			 				window.ddx_DemandbaseUID=digitalData.page.pageInfo.attributes.Demandbase; // $NO-OBF
			 				} // $NO-OBF
			 				(function(d, b, a, s, e) { // $NO-OBF
			 				var t = b.createElement(a), // $NO-OBF
			 				fs = b.getElementsByTagName(a)[0]; // $NO-OBF
			 				t.async = 1; // $NO-OBF
			 				t.id = e; // $NO-OBF
			 				t.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + s; // $NO-OBF
			 				fs.parentNode.insertBefore(t, fs); // $NO-OBF
			 				})(window, document, 'script', 'scripts.demandbase.com/'+ window.ddx_DemandbaseUID+'.min.js', 'demandbase_js_lib'); // $NO-OBF
		 			__$helper.recordAudit('Demandbase', 'Load Library', __$helper.startAudit()); //$NO-OBF
		 		}
		 	}
 // EACH JS FUNCTION
			// INJECT THE FUNCTION 
		 	if (typeof(CM_DDX.partner.$1082["db_IbmConnector"]) === "undefined") //$NO-OBF 
		 	{
		 		CM_DDX.partner.$1082["db_IbmConnector"] = function(elementID,elementCategory) //$NO-OBF
		 		{
			 				debugger; // $NO-OBF
			 				var foundFlag=0; // $NO-OBF
			 				window.ddx_dbattribs=arguments; // $NO-OBF
			 				if (typeof(window.Demandbase)=="object"){ // $NO-OBF
			 				if (typeof(window.Demandbase.IP)=="object"){ // $NO-OBF
			 				if (typeof(window.Demandbase.IP.CompanyProfile)=="object"){ // $NO-OBF
			 				foundFlag=1; // $NO-OBF
			 				} // $NO-OBF
			 				} // $NO-OBF
			 				} // $NO-OBF
			 				if (foundFlag==1){ // $NO-OBF
			 				var attribs=[]; // $NO-OBF
			 				for (var i=2;i<window.ddx_dbattribs.length;i +=2){ // $NO-OBF
			 				if (window.ddx_dbattribs[i+1]){ // $NO-OBF
			 				if (typeof(window.Demandbase)=="object"){ // $NO-OBF
			 				if (typeof(window.Demandbase.IP)=="object"){ // $NO-OBF
			 				if (typeof(window.Demandbase.IP.CompanyProfile)=="object"){ // $NO-OBF
			 				foundFlag=1; // $NO-OBF
			 				} // $NO-OBF
			 				} // $NO-OBF
			 				} // $NO-OBF
			 				if (foundFlag==1){ // $NO-OBF
			 				if (typeof(window.Demandbase.IP.CompanyProfile[window.ddx_dbattribs[i]])!=="undefined"){ // $NO-OBF
			 				window.Demandbase.IP.CompanyProfile[window.ddx_dbattribs[i]] ? attribs[window.ddx_dbattribs[i+1]-1]=window.Demandbase.IP.CompanyProfile[window.ddx_dbattribs[i]] : attribs[window.ddx_dbattribs[i+1]-1]=""; // $NO-OBF
			 				} // $NO-OBF
			 				} // $NO-OBF
			 				} // $NO-OBF
			 				} // $NO-OBF
			 				var myAttribs=attribs.join("-_-"); // $NO-OBF
			 				cmCreateElementTag(elementID,elementCategory,myAttribs); // $NO-OBF
			 				} else { // $NO-OBF
			 				setTimeout(function(){ // $NO-OBF
			 				var attribs=[]; // $NO-OBF
			 				for (var i=2;i<window.ddx_dbattribs.length;i +=2){ // $NO-OBF
			 				if (window.ddx_dbattribs[i+1]){ // $NO-OBF
			 				if (typeof(window.Demandbase)=="object"){ // $NO-OBF
			 				if (typeof(window.Demandbase.IP)=="object"){ // $NO-OBF
			 				if (typeof(window.Demandbase.IP.CompanyProfile)=="object"){ // $NO-OBF
			 				foundFlag=1; // $NO-OBF
			 				} // $NO-OBF
			 				} // $NO-OBF
			 				} // $NO-OBF
			 				if (foundFlag==1){ // $NO-OBF
			 				if (typeof(window.Demandbase.IP.CompanyProfile[window.ddx_dbattribs[i]])!=="undefined"){ // $NO-OBF
			 				window.Demandbase.IP.CompanyProfile[window.ddx_dbattribs[i]] ? attribs[window.ddx_dbattribs[i+1]-1]=window.Demandbase.IP.CompanyProfile[window.ddx_dbattribs[i]] : attribs[window.ddx_dbattribs[i+1]-1]=""; // $NO-OBF
			 				} // $NO-OBF
			 				} // $NO-OBF
			 				} // $NO-OBF
			 				} // $NO-OBF
			 				var myAttribs=attribs.join("-_-"); // $NO-OBF
			 				cmCreateElementTag(elementID,elementCategory,myAttribs); // $NO-OBF
			 				}, 600); // $NO-OBF
			 				} // $NO-OBF
		 			__$helper.recordAudit('Demandbase', 'IBM DA Connector', __$helper.startAudit()); //$NO-OBF
		 		}
		 	}
 // EACH PARTNER (ASSOCIATED WITH PGS DEPLOYED)
		// INITIALIZE THE NAMESPACE FOR THIS EXTENDED PARTNER
		if (typeof(CM_DDX.partner.$1022) === "undefined") //$NO-OBF
		{
			CM_DDX.partner.$1022 = { id: 1022} //$NO-OBF
		}
		
		//Add settings into the object
		if (typeof(CM_DDX.partner.$1022.settings) === "undefined") //$NO-OBF
		{
			CM_DDX.partner.$1022.settings = {staging:{}, production:{} }; //$NO-OBF
		}
						CM_DDX.partner.$1022.settings.
							production
						["data_collection_domain"] =  //$NO-OBF
							"media.ibm.com"; //$NO-OBF
		
		//Add deployment time variables
		if (typeof(CM_DDX.partner.$1022.dataVars) === "undefined") //$NO-OBF
		{
			CM_DDX.partner.$1022.dataVars = {}; //$NO-OBF
		}
		
		 // EACH JS FUNCTION
			// INJECT THE FUNCTION 
		 	if (typeof(CM_DDX.partner.$1022["te_Measure"]) === "undefined") //$NO-OBF 
		 	{
		 		CM_DDX.partner.$1022["te_Measure"] = function(spcaeDesc,target,group,event,revenue,orderID) //$NO-OBF
		 		{
			 				this.settings.production.data_collection_domain?window.ddx_te_domain=this.settings.production.data_collection_domain:dummy=true; // $NO-OBF
			 				function someFunction123(userID) { // $NO-OBF
			 				myCoremetricsVisitorID = userID; // $NO-OBF
			 				} // $NO-OBF
			 				cmRetrieveUserID(someFunction123); // $NO-OBF
			 				var img= new Image(); // $NO-OBF
			 				var parmString=""; // $NO-OBF
			 				for (var i=6;i<arguments.length;i +=2) // $NO-OBF
			 				{ // $NO-OBF
			 				parmString=parmString+"&"+arguments[i]+"="+arguments[i+1]; // $NO-OBF
			 				} // $NO-OBF
			 				if (!target){target="_blank";} // $NO-OBF
			 				ifrm = document.createElement("IFRAME"); // $NO-OBF
			 				ifrm.setAttribute("src", (("https:" == document.location.protocol) ? "https://" : "http://")+window.ddx_te_domain+"/ipixel?spacedesc="+spcaeDesc+"&db_afcr=123&target="+target+"&group="+group+"&event="+event+"&revenue="+revenue+"&random="+(Math.random()*10000000000000000)+"&orderid="+orderID+"&x_IBM_CMID="+myCoremetricsVisitorID+parmString); // $NO-OBF
			 				ifrm.style.width = 1+"px"; // $NO-OBF
			 				ifrm.style.height = 1+"px"; // $NO-OBF
			 				ifrm.style.scrolling="No"; // $NO-OBF
			 				ifrm.style.frameborder="0"; // $NO-OBF
			 				ifrm.style.marginheight="0"; // $NO-OBF
			 				ifrm.style.marginwidth="0"; // $NO-OBF
			 				document.body.appendChild(ifrm); // $NO-OBF
		 			__$helper.recordAudit('Trueffect', 'True Effect Measure Tag', __$helper.startAudit()); //$NO-OBF
		 		}
		 	}
 // EACH JS FUNCTION
			// INJECT THE FUNCTION 
		 	if (typeof(CM_DDX.partner.$1022["te_Pixel"]) === "undefined") //$NO-OBF 
		 	{
		 		CM_DDX.partner.$1022["te_Pixel"] = function(spaceDesc,target,group,event,revenue,orderID) //$NO-OBF
		 		{
			 				function someFunction123(userID) { // $NO-OBF
			 				myCoremetricsVisitorID = userID; // $NO-OBF
			 				} // $NO-OBF
			 				cmRetrieveUserID(someFunction123); // $NO-OBF
			 				var img= new Image(); // $NO-OBF
			 				var parmString=""; // $NO-OBF
			 				for (var i=6;i<arguments.length;i +=2) // $NO-OBF
			 				{ // $NO-OBF
			 				parmString=parmString+"&"+arguments[i]+"="+arguments[i+1]; // $NO-OBF
			 				} // $NO-OBF
			 				if (!target){target="_blank";} // $NO-OBF
			 				myImg=new Image(); // $NO-OBF
			 				myImg.src= (("https:" == document.location.protocol) ? "https://" : "http://")+this.settings.production.data_collection_domain+"/ping?spacedesc="+spaceDesc+"&db_afcr=123&target="+target+"&group="+group+"&event="+event+"&revenue="+revenue+"&random="+(Math.random()*10000000000000000)+"&orderid="+orderID+"&x_IBM_CMID="+myCoremetricsVisitorID+parmString; // $NO-OBF
		 			__$helper.recordAudit('Trueffect', 'True Effect Pixel Tag', __$helper.startAudit()); //$NO-OBF
		 		}
		 	}
 // EACH PARTNER (ASSOCIATED WITH PGS DEPLOYED)
		// INITIALIZE THE NAMESPACE FOR THIS EXTENDED PARTNER
		if (typeof(CM_DDX.partner.$1068) === "undefined") //$NO-OBF
		{
			CM_DDX.partner.$1068 = { id: 1068} //$NO-OBF
		}
		
		//Add settings into the object
		if (typeof(CM_DDX.partner.$1068.settings) === "undefined") //$NO-OBF
		{
			CM_DDX.partner.$1068.settings = {staging:{}, production:{} }; //$NO-OBF
		}
		
		//Add deployment time variables
		if (typeof(CM_DDX.partner.$1068.dataVars) === "undefined") //$NO-OBF
		{
			CM_DDX.partner.$1068.dataVars = {}; //$NO-OBF
		}
		
		 // EACH JS FUNCTION
			// INJECT THE FUNCTION 
		 	if (typeof(CM_DDX.partner.$1068["td_Conversion"]) === "undefined") //$NO-OBF 
		 	{
		 		CM_DDX.partner.$1068["td_Conversion"] = function(advertiserID,conversionType,format,monetaryValue,currencyType,orderID,partnerID) //$NO-OBF
		 		{
			 				var tdURL="insight.adsrvr.org/track/conv?ct="+conversionType // $NO-OBF
			 				if (partnerID){tdURL=tdURL+"&pid="+partnerID;} // $NO-OBF
			 				if (format){tdURL=tdURL+"&fmt="+format;} // $NO-OBF
			 				if (monetaryValue){tdURL=tdURL+"&v="+monetaryValue;} // $NO-OBF
			 				if (currencyType){tdURL=tdURL+"&vf="+currencyType;} // $NO-OBF
			 				if (orderID){tdURL=tdURL+"&orderid="+orderID;} // $NO-OBF
			 				tdURL=tdURL+"&adv="+advertiserID; // $NO-OBF
			 				var k=0 // $NO-OBF
			 				for (var i=7;i<16;i +=2){ // $NO-OBF
			 				if (arguments[i+1]){ // $NO-OBF
			 				k+=1; // $NO-OBF
			 				tdURL=tdURL+"&td"+k.toString()+"="+arguments[i+1]; // $NO-OBF
			 				} // $NO-OBF
			 				} // $NO-OBF
			 				 // $NO-OBF
			 				ifrm = document.createElement("IFRAME"); // $NO-OBF
			 				ifrm.setAttribute("src", (("https:" == document.location.protocol) ? "https://" : "http://")+tdURL); // $NO-OBF
			 				ifrm.style.width = 0+"px"; // $NO-OBF
			 				ifrm.style.height = 0+"px"; // $NO-OBF
			 				document.body.appendChild(ifrm); // $NO-OBF
		 			__$helper.recordAudit('The Trade Desk', 'Conversion Tracking Beacon', __$helper.startAudit()); //$NO-OBF
		 		}
		 	}
 // EACH JS FUNCTION
			// INJECT THE FUNCTION 
		 	if (typeof(CM_DDX.partner.$1068["td_Event"]) === "undefined") //$NO-OBF 
		 	{
		 		CM_DDX.partner.$1068["td_Event"] = function(advertiserID,conversionType,format,partnerID) //$NO-OBF
		 		{
			 				var tdURL="insight.adsrvr.org/track/evnt?ct="+conversionType+"&adv="+advertiserID // $NO-OBF
			 				if (format){tdURL=tdURL+"&fmt="+format;} // $NO-OBF
			 				if (partnerID){tdURL=tdURL+"&pid="+partnerID;} // $NO-OBF
			 				ifrm = document.createElement("IFRAME"); // $NO-OBF
			 				ifrm.setAttribute("src", (("https:" == document.location.protocol) ? "https://" : "http://")+tdURL); // $NO-OBF
			 				ifrm.style.width = 0+"px"; // $NO-OBF
			 				ifrm.style.height = 0+"px"; // $NO-OBF
			 				document.body.appendChild(ifrm); // $NO-OBF
		 			__$helper.recordAudit('The Trade Desk', 'Event Tracking Beacon Service', __$helper.startAudit()); //$NO-OBF
		 		}
		 	}
 // EACH JS FUNCTION
			// INJECT THE FUNCTION 
		 	if (typeof(CM_DDX.partner.$1068["td_ConversionByHREF"]) === "undefined") //$NO-OBF 
		 	{
		 		CM_DDX.partner.$1068["td_ConversionByHREF"] = function(spType,href,advertiserID,conversionType,format,monetaryValue,currencyType,orderID,partnerID) //$NO-OBF
		 		{
			 				 // $NO-OBF
			 				switch(spType) { // $NO-OBF
			 				case "Link": // $NO-OBF
			 				for (var i = 0 ; i < document.links.length; i++) // $NO-OBF
			 				{ // $NO-OBF
			 				window.ddx_ListenCount=i; // $NO-OBF
			 				if (document.links[i].href==href){ // $NO-OBF
			 				if(document.links[i].addEventListener) { // $NO-OBF
			 				document.links[i].addEventListener("click", function(event){ // $NO-OBF
			 				event=event||window.event; // $NO-OBF
			 				event.preventDefault(); // $NO-OBF
			 				var tdURL="insight.adsrvr.org/track/conv?ct="+conversionType // $NO-OBF
			 				if (partnerID){tdURL=tdURL+"&pid="+partnerID;} // $NO-OBF
			 				if (format){tdURL=tdURL+"&fmt="+format;} // $NO-OBF
			 				if (monetaryValue){tdURL=tdURL+"&v="+monetaryValue;} // $NO-OBF
			 				if (currencyType){tdURL=tdURL+"&vf="+currencyType;} // $NO-OBF
			 				if (orderID){tdURL=tdURL+"&orderid="+orderID;} // $NO-OBF
			 				tdURL=tdURL+"&adv="+advertiserID; // $NO-OBF
			 				var k=0 // $NO-OBF
			 				for (var i=7;i<16;i +=2){ // $NO-OBF
			 				if (arguments[i+1]){ // $NO-OBF
			 				k+=1; // $NO-OBF
			 				tdURL=tdURL+"&td"+k.toString()+"="+arguments[i+1]; // $NO-OBF
			 				} // $NO-OBF
			 				} // $NO-OBF
			 				ifrm = document.createElement("IFRAME"); // $NO-OBF
			 				ifrm.setAttribute("src", (("https:" == document.location.protocol) ? "https://" : "http://")+tdURL); // $NO-OBF
			 				ifrm.style.width = 0+"px"; // $NO-OBF
			 				ifrm.style.height = 0+"px"; // $NO-OBF
			 				document.body.appendChild(ifrm); // $NO-OBF
			 				setTimeout(function(){window.location.href=document.links[window.ddx_ListenCount].href;},600); // $NO-OBF
			 				}); // $NO-OBF
			 				} else { // $NO-OBF
			 				document.links[i].attachEvent("onclick", function(event){ // $NO-OBF
			 				event=event||window.event; // $NO-OBF
			 				event.preventDefault(); // $NO-OBF
			 				var tdURL="insight.adsrvr.org/track/conv?ct="+conversionType // $NO-OBF
			 				if (partnerID){tdURL=tdURL+"&pid="+partnerID;} // $NO-OBF
			 				if (format){tdURL=tdURL+"&fmt="+format;} // $NO-OBF
			 				if (monetaryValue){tdURL=tdURL+"&v="+monetaryValue;} // $NO-OBF
			 				if (currencyType){tdURL=tdURL+"&vf="+currencyType;} // $NO-OBF
			 				if (orderID){tdURL=tdURL+"&orderid="+orderID;} // $NO-OBF
			 				tdURL=tdURL+"&adv="+advertiserID; // $NO-OBF
			 				var k=0 // $NO-OBF
			 				for (var i=7;i<16;i +=2){ // $NO-OBF
			 				if (arguments[i+1]){ // $NO-OBF
			 				k+=1; // $NO-OBF
			 				tdURL=tdURL+"&td"+k.toString()+"="+arguments[i+1]; // $NO-OBF
			 				} // $NO-OBF
			 				} // $NO-OBF
			 				ifrm = document.createElement("IFRAME"); // $NO-OBF
			 				ifrm.setAttribute("src", (("https:" == document.location.protocol) ? "https://" : "http://")+tdURL); // $NO-OBF
			 				ifrm.style.width = 0+"px"; // $NO-OBF
			 				ifrm.style.height = 0+"px"; // $NO-OBF
			 				document.body.appendChild(ifrm); // $NO-OBF
			 				setTimeout(function(){window.location.href=document.links[window.ddx_ListenCount].href;},600); // $NO-OBF
			 				}); // $NO-OBF
			 				} // $NO-OBF
			 				} // $NO-OBF
			 				} // $NO-OBF
			 				break; // $NO-OBF
			 				case "Form": // $NO-OBF
			 				for (var i = 0 ; i < document.forms.length; i++) // $NO-OBF
			 				{ // $NO-OBF
			 				window.ddx_ListenCount=i; // $NO-OBF
			 				if (document.forms[i].action==href){ // $NO-OBF
			 				if(document.forms[i].addEventListener) { // $NO-OBF
			 				document.forms[i].addEventListener("submit", function(event){ // $NO-OBF
			 				event=event||window.event; // $NO-OBF
			 				event.preventDefault(); // $NO-OBF
			 				var tdURL="insight.adsrvr.org/track/conv?ct="+conversionType // $NO-OBF
			 				if (partnerID){tdURL=tdURL+"&pid="+partnerID;} // $NO-OBF
			 				if (format){tdURL=tdURL+"&fmt="+format;} // $NO-OBF
			 				if (monetaryValue){tdURL=tdURL+"&v="+monetaryValue;} // $NO-OBF
			 				if (currencyType){tdURL=tdURL+"&vf="+currencyType;} // $NO-OBF
			 				if (orderID){tdURL=tdURL+"&orderid="+orderID;} // $NO-OBF
			 				tdURL=tdURL+"&adv="+advertiserID; // $NO-OBF
			 				var k=0 // $NO-OBF
			 				for (var i=7;i<16;i +=2){ // $NO-OBF
			 				if (arguments[i+1]){ // $NO-OBF
			 				k+=1; // $NO-OBF
			 				tdURL=tdURL+"&td"+k.toString()+"="+arguments[i+1]; // $NO-OBF
			 				} // $NO-OBF
			 				} // $NO-OBF
			 				ifrm = document.createElement("IFRAME"); // $NO-OBF
			 				ifrm.setAttribute("src", (("https:" == document.location.protocol) ? "https://" : "http://")+tdURL); // $NO-OBF
			 				ifrm.style.width = 0+"px"; // $NO-OBF
			 				ifrm.style.height = 0+"px"; // $NO-OBF
			 				document.body.appendChild(ifrm); // $NO-OBF
			 				setTimeout(function(){document.forms[window.ddx_ListenCount].submit();},600); // $NO-OBF
			 				}); // $NO-OBF
			 				} else { // $NO-OBF
			 				document.forms[i].attachEvent('onsubmit', function(event){ // $NO-OBF
			 				event=event||window.event; // $NO-OBF
			 				event.preventDefault(); // $NO-OBF
			 				var tdURL="insight.adsrvr.org/track/conv?ct="+conversionType // $NO-OBF
			 				if (partnerID){tdURL=tdURL+"&pid="+partnerID;} // $NO-OBF
			 				if (format){tdURL=tdURL+"&fmt="+format;} // $NO-OBF
			 				if (monetaryValue){tdURL=tdURL+"&v="+monetaryValue;} // $NO-OBF
			 				if (currencyType){tdURL=tdURL+"&vf="+currencyType;} // $NO-OBF
			 				if (orderID){tdURL=tdURL+"&orderid="+orderID;} // $NO-OBF
			 				tdURL=tdURL+"&adv="+advertiserID; // $NO-OBF
			 				var k=0 // $NO-OBF
			 				for (var i=7;i<16;i +=2){ // $NO-OBF
			 				if (arguments[i+1]){ // $NO-OBF
			 				k+=1; // $NO-OBF
			 				tdURL=tdURL+"&td"+k.toString()+"="+arguments[i+1]; // $NO-OBF
			 				} // $NO-OBF
			 				} // $NO-OBF
			 				ifrm = document.createElement("IFRAME"); // $NO-OBF
			 				ifrm.setAttribute("src", (("https:" == document.location.protocol) ? "https://" : "http://")+tdURL); // $NO-OBF
			 				ifrm.style.width = 0+"px"; // $NO-OBF
			 				ifrm.style.height = 0+"px"; // $NO-OBF
			 				document.body.appendChild(ifrm); // $NO-OBF
			 				setTimeout(function(){document.forms[window.ddx_ListenCount].submit();},600); // $NO-OBF
			 				}); // $NO-OBF
			 				} // $NO-OBF
			 				} // $NO-OBF
			 				} // $NO-OBF
			 				break; // $NO-OBF
			 				} // $NO-OBF
			 				 // $NO-OBF
		 			__$helper.recordAudit('The Trade Desk', 'Conversion Tracking by HREF(Links and Forms)', __$helper.startAudit()); //$NO-OBF
		 		}
		 	}
},

/**
 * Invocation of prerequisite code that will be executed either in head, body_start or dom_ready
 * Note that anything (JS_FUNCTION or JS_FILE) following a JS_FILE are loaded synchronously i.e. after the load completes. 
 */
	$v751: function()
	{
	var $v652 = $f183.$v73();
	 // EACH PARTNER (ASSOCIATED WITH PGS DEPLOYED)
		if ($v652.contains(1082))
		{
			;
		}
 // EACH PARTNER (ASSOCIATED WITH PGS DEPLOYED)
		if ($v652.contains(1022))
		{
			;
		}
 // EACH PARTNER (ASSOCIATED WITH PGS DEPLOYED)
		if ($v652.contains(1068))
		{
			;
		}
	}
, // <<<=== PRESERVE THIS TRAILING COMMA
			
			
		
			
			$v850: { }
		}
		return $f169;
	}();


	/**
 * Licensed Materials - Property of IBM
 *
 * codesnippets.js.ftl
 *
 * (C) Copyright IBM Corporation 2012.
 * U.S. Government Users Restricted Rights:  Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

	var hmNameToIds = [];
	var $v129 = new function()
	{
		var $f169 = {
		
			/**
			 *
			 */
			register: function()
			{
				hmNameToIds["CoreID6"] = 1017;
			},
		
			/**
			 *
			 */
			run: function(sSnippetName)
			{
				if (hmNameToIds[sSnippetName])
				{
					window["$v129"]["$" + hmNameToIds[sSnippetName]](!0);
				}
				else
				{
					throw "Unable to find runtime code snippet ["+sSnippetName+"]\nThis could've happened either because your code snippet wasn't included in any of the deployed page groups."; 
				}
			},
		
			/**
			 * Sequentially invokes each code snippet's wrapper function (for all code snippet ids specified in an array)
			 */
			invoke: function($v258)
			{
				for (var i = 0; i < $v258.length; i++)
				{
					window["$v129"]["$" + $v258[i]](!1);
				}
			},
				
			/**
			 * This is a wrapper function for code snippet
			 * Name: CoreID6
			 * Id: 1017
			 */
			$1017: function(bManuallyInvoked) //$NO-OBF
			{
									function someFunction123(userID) { //$NO-OBF //$NO-OBF
									     myCoremetricsVisitorID = userID; //$NO-OBF //$NO-OBF
									}; //$NO-OBF //$NO-OBF
									cmRetrieveUserID(someFunction123); //$NO-OBF //$NO-OBF
			}
		}
		return $f169;
	}(); 

	/**
 * Licensed Materials - Property of IBM
 *
 * segments.js.ftl
 *
 * (C) Copyright IBM Corporation 2013.
 * U.S. Government Users Restricted Rights:  Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */


	/**
 * Licensed Materials - Property of IBM
 *
 * custrules.js.ftl
 *
 * (C) Copyright IBM Corporation 2013.
 * U.S. Government Users Restricted Rights:  Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */


	/**
 * Licensed Materials - Property of IBM
 *
 * helper.js.ftl
 * Included both by the synchronously loaded / executed container as well as the asynchronously loaded c[x]p[t] rules files.
 * Contains common functions used by both workflows.
 *
 * (C) Copyright IBM Corporation 2012.
 * U.S. Government Users Restricted Rights:  Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * Helper methods that may be used via modifiers or elsewhere
 */
var __$helper = function()
{
	var audits = {
	};
	/**
	 * Public namespaced constants accessible externally
	 */
	var $f169 = {
	
		/**
		 *
		 */
		prefix: function(sPrefix, sValue)
		{
			return sPrefix + sValue;
		},
		
		/**
		 *
		 */
		suffix: function(sValue, sSuffix)
		{
			return sValue + sSuffix;
		},
		
		isStaging: function()
		{
			return !1;
		},
		
		/**
		 * Loads the given Javascript file and calls the callback function after the file is loaded.
		 */
		loadJS: function(url, callbackFunctionNameOrReference) {
			var fn = callbackFunctionNameOrReference;
			if (typeof fn === "string") {
				fn = eval(fn);
				if (typeof fn !== "function") {
					alert( callbackFunctionNameOrReference + " is not a function");
					return;
				}
			}
			__$dispatcher.load(url, fn);
		},
		/**
		 * This invokes a given function with any parameters that are passed to it.
		 * The first parameter is the function name or reference followed by any number of parameters that are to be passed to the function.
		 */
		invokeFunction: function(functionNameOrReference) {
			var fn = functionNameOrReference;
			if (typeof fn === "string") {
				fn = eval(fn);
				if (typeof fn !== "function") {
					alert( functionNameOrReference + " is not a function");
					return;
				}
			}
			var fargs = [];
			for (var i = 1; i < arguments.length; i++) {
				fargs[fargs.length] = arguments[i];
			}
			
			fn.apply(this, fargs);
		},
		
		emptyCallback: function(){
		},
		
		/**
		 * Sends a pixel request to the given URL
		 * 
		 * baseURL: the url to send the request to
		 * type: "img"/"iframe" indicating whether to use a image or iframe for syndication
		 * Variable parameters in key, value format
		 * i.e. pixel(baseURL, type, param1, param1value, param2, param2value
		 */
		pixel: function(baseURL, type){
			var args = Array.prototype.slice.call(arguments);
			args.splice(2, __$helper.emptyCallback);
			__$helper.pixelWithCallback.apply(this, args);
		}, 
		
		/**
		 * Sends a pixel request to the given URL
		 * 
		 * baseURL: the url to send the request to
		 * type: "img"/"iframe" indicating whether to use a image or iframe for syndication
		 * Variable parameters in key, value format
		 * i.e. pixel(baseURL, type, param1, param1value, param2, param2value
		 */
		pixelWithCallback: function(baseURL, type, callback) {
			type = type.toLowerCase();
			var sURL = baseURL;
			sURL += ((sURL.indexOf("?") == -1)?"?":"&");
			sURL += $f180.$v465("che");
			
			var bToggle = !1;
			var paramName, paramValue;
			for (var i = 3; i < arguments.length; i++)
			{
				if (!bToggle)
				{
					paramName = arguments[i];
				}
				else
				{
					paramValue = arguments[i];
					sURL = sURL + "&" + paramName + "=" + cE(paramValue);
				}
				bToggle = !bToggle;
			}

			if (type == "iframe") {
				var ifrm = document.createElement("IFRAME"); 
				ifrm.src = sURL; 
				ifrm.style.width = 0+"px"; 
				ifrm.style.height = 0+"px";
				ifrm.marginWidth = "0";
				ifrm.marginHeight = "0";
				ifrm.hspace = "0";
				ifrm.vspace = "0";
				ifrm.scrolling = "no";
				ifrm.frameBorder = "0";
				ifrm.style.borderColor="#000000";
				ifrm.onload=callback;
				ifrm.onerror=callback;
				document.body.appendChild(ifrm);
			} else {
				//Default to img
				var img =	new Image();
				img.width = "1";
				img.height = "1";
				img.border = "0";
				img.onload=callback;
				img.onerror=callback;
				img.src = sURL;
			}
		},
		
		/**
		 * Replaces the content of the given element
		 *
		 * idOrXpathOrName: Looks up first by id, then xpath, then name
		 * htmlContent: The innerHTML content to set in the given object
		 */
		replaceContent: function(idOrXpathOrName, htmlContent) {
			//First find by Id
			var o = document.getElementById(idOrXpathOrName);
			if (!o) {
				//Find by xpath
				o =  $f181.$v694(idOrXpathOrName);
				if (!o) {
					//Find by name
					var oa = document.getElementsByName(idOrXpathOrName);
					if (oa.length > 0 ) {
						o = oa[0];
					}
				}
			}
			
			if (o) {
				//Replace the inner html of the object
				o.innerHTML = htmlContent;
			}
		},
		
		/**
		 * This method starts the audit timer and returns a id.
		 * The id returned by this method should be passed to the recordAudit OR recordAuditCallback function
		 */
		startAudit: function(){
			var d = new Date();
			audits[d.getTime()] = d.getTime();
			return d.getTime();
		},
		
		/**
		 * This method sends audit information to the da servers using a element tag.
		 * 
		 * partnerName: The name of the partner
		 * tagName: The name of the tag
		 * auditId: The id that was returned from the startAudit method
		 */
		recordAudit: function(partnerName, tagName, auditId){
			if(CM_DDX.auditEnabled && audits[auditId]){
				var d = new Date();
				//Only do this if auditing is enabled because this results in additional tags being sent for the given client id
				var attr = "";
				var max = (CM_DDX.auditElementAttribute1 > CM_DDX.auditElementAttribute2)?CM_DDX.auditElementAttribute1:CM_DDX.auditElementAttribute2;
				for(var i = 1; i <= max; i++){
					if (i > 1){
						attr += "-_-";
					}
					
					if (i === CM_DDX.auditElementAttribute1){
						attr += cE((d.getTime() - audits[auditId]) + "|" + d.getTime() + "|" + d.getTimezoneOffset());
					}else if(i === CM_DDX.auditElementAttribute2){
						attr += cE(document.URL);
					}
				}
				//attr += (d.getTime() - audits[auditId]) + "|" + d.getTime() + "|" + d.getTimezoneOffset();
				delete audits[auditId];
				cmCreateElementTag(partnerName + "|" + tagName, "DDX_TAG_AUDIT", attr);
			}
		},
		/**
		 * A convenience function that returns a function which can be used to record the audit on the callback to the pixel tag
		 * 
		 * partnerName: The name of the partner
		 * tagName: The name of the tag
		 * auditId: The id that was returned from the startAudit method
		 * fn: Reference to a function that will be called before recording the audit
		 */
		recordAuditCallback: function(partnerName, tagName, auditId, fn){
			return function(){
					if (fn && typeof fn === "function"){
						fn();
					}
					__$helper.recordAudit(partnerName, tagName, auditId);
				}
		}
	}
	return $f169;	
}();


	var $f183 = new function()
	{
		var $v992 = null, $v934 = new $f165(), $v239 = new $f165(), $v121 = [],
			$v652 = null;
	
		/**
		 * Returns all partner IDs associated with a page group definition (and its tag configurations)
		 */
		var $v97 =
		[
				[
				]
		];
	
		var $f169 = {
		
			/**
			 * This is responsible for invoking the global page groups if any
			 */
			setup: function()
			{
				$v992 = [];
				$v652 = new $f165();
				
				// LOGIC HERE DETERMINES WHICH OF THE PAGE GROUP / TAG RULES ARE SATISFIED
				var sReferralUrl = document.referrer, sDestinationUrl = document.URL, sVcpi = "";
				try {
					sVcpi = _cmPartnerUtils.parseVCPI(document.URL);
					if (sVcpi === "")
					{
						sVcpi = _cmPartnerUtils.parseVCPI(sReferralUrl);
					}
					if (sVcpi.length > 4) // ARRAY WITH MULTIPLE PARAMS / PROTECT FROM ARRAY ERR
					{
						sVcpi = sVcpi[1] + "-_-" + sVcpi[2] + "-_-" + sVcpi[3] + "-_-" + sVcpi[4];
					}
				} catch (sErr)
				{
					$f180.$f124(sErr);
				}
				
					 // SUPPORT FOR GLOBAL PAGE GROUPS (IN HEAD)
						$f169.register({id: 0, global: !0, head: !0}, [1017]);
				
				$f169.initialize(sReferralUrl, sDestinationUrl, sVcpi);
			},
	
			/**
			 * Setup an associative array as a cache to determine which page groups are satisfied
			 * Note: If the page identifier can't yet be resolved, quit execution because we're in the <head> and can't $v891
			 */
			initialize: function(sReferralUrl, sDestinationUrl, sVcpi)
			{
				var $f93 = $f181.getPageIdentifier();
				
				// UNRESOLVD PAGE IDENTIFIER
				if ($f93 === null)
				{
				}
				else if ($f93.length > 0 && $f93.charAt(0) === '\x01')
				{
					$f93 = null;
				}
				
				
					
				__$partnerHead.$v917();

				if (typeof($v129) !== "undefined")
				{
					$v129.register(); // NEEDED SO YOU CAN CALL CODE SNIPPETS BY NAME
				}
				if (typeof($f187) !== "undefined")
				{
					$f187.initialize(); // NEEDED SO ELUMINATE CAN PROCESS DDX SEGMENT EXPRESSIONS WHEN TAGS ARE CALLED 
				}
				
								
				__$partnerHead.$v751();
				$f183.$v278();
				$f183.$v538();
			},
			
			/**
			 * Registers a satisfied page group (generated JS space saver)
			 */
			register: function(pg, $v258)
			{
				$v992[pg.id] = pg;
				for (var i = 0; i < $v97[pg.id].length; i++)
				{
					$v652.add(($v97[pg.id])[i]);
				}
				$v121[pg.id] = $v258;
			},
	
			/**
			 *
			 */
			$v73: function()
			{
				return $v652;
			},
	
			/**
			 * Attempts to load JS code synchronously (i.e. blocks until code loads and executes)
			 * Must only be called from <head>
			 */
			$v730: function(sUrl)
			{
				var sScript = "<scr" + "ipt type=\"text/javascript\" src=\"" + sUrl + "\"></scr" + "ipt>";
				document.write(sScript);
			},
	
			/**
			 * Note that custom JS blocks are loaded even in test mode
			 */
			$v278: function()
			{
				// CUSTOM JS BLOCK LOADS (PER PG)
				var $v726;
					if ($v992[0]) // PREVIOUSLY TESTED VIA RULE
					{
							$v129.invoke($v121[0]);
					}
			},
			
			/**
			 * Iterates through all tags associated with <head> page groups and syndicates if the page group's page identifier criteria is met
			 */
			$v538: function()
			{
				var $v410, $v90, $v100, $v346, $v339, $v598, fe, hm, $v830, $v952, $v964, $v887, oValue, oArg;
					if ($v992[0]) // PREVIOUSLY TESTED VIA RULE
					{
					}
			}
		}	
		return $f169;
	}(); 
	$f183.setup();
