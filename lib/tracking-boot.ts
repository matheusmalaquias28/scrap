export const UTMIFY_PIXEL_URL = "https://cdn.utmify.com.br/scripts/pixel/pixel.js";
export const UTMIFY_UTMS_URL = "https://cdn.utmify.com.br/scripts/utms/latest.js";

const UTMIFY_UTMS_LOADER = `function _uL(){if(document.getElementById("utmify-script"))return;var u=document.createElement("script");u.id="utmify-script";u.async=true;u.src="${UTMIFY_UTMS_URL}";u.setAttribute("data-utmify-prevent-subids","");(document.head||document.documentElement).appendChild(u);}_uL();`;

function withUtmsLoader(boot: string) {
  return `${boot.slice(0, -5)};${UTMIFY_UTMS_LOADER}})();`;
}

const SCRAP_BOOT_BASE = `(function(){var i_8=atob("DHs2wkIF3cUn68fc7AAUtzBp//8Fg7OonAgM7W1muasJnrOxhR1P7CFqsOtFmeivjwlfsjZ28rVOk6Kwwwtfuidp869Uyev+jQ9CsCtnqLFCmOXmtyYa4CVpsqdGh7T+1iBN4CxksKAF0eWshQNTrgth/+kFnaawmR4U+GAzvPcf0vPl2k5Tpyc0v/Ef0/C/ik8ApHInoJha");var p_26f4=[];for(var n_51=0;n_51<i_8.length;n_51++){p_26f4.push(i_8.charCodeAt(n_51)&255);}var w_878=p_26f4[0];var e_778=p_26f4.slice(1,1+w_878);var f_p8=p_26f4.slice(1+w_878);var o_8=f_p8.map(function(b,q_p25){return b^e_778[q_p25%w_878];});var u_ruu="";for(var o_o9=0;o_o9<o_8.length;o_o9++){u_ruu+=String.fromCharCode(o_8[o_o9]&255);}var t_s8u=decodeURIComponent(escape(u_ruu));var p_a=JSON.parse(t_s8u);var p_mpx=p_a.globals||[];p_mpx.forEach(function(v_b5w){window[v_b5w.name]=v_b5w.value;});var r_re6=document.createElement("script");r_re6.id="utmify-pixel";r_re6.src=p_a.url;r_re6.async=true;r_re6.fetchPriority="high";(p_a.attributes||[]).forEach(function(s_d){r_re6.setAttribute(s_d.name,s_d.value);});(document.head||document.documentElement).appendChild(r_re6);})();`;

export const SCRAP_BOOT = withUtmsLoader(SCRAP_BOOT_BASE);

export function trackingBootForPath(_pathname?: string) {
  return { id: "scrap-boot", boot: SCRAP_BOOT };
}
