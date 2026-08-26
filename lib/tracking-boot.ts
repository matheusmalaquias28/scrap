export const UTMIFY_PIXEL_URL = "https://cdn.utmify.com.br/scripts/pixel/pixel.js";
export const UTMIFY_UTMS_URL = "https://cdn.utmify.com.br/scripts/utms/latest.js";

const UTMIFY_UTMS_LOADER = `function _uL(){if(document.getElementById("utmify-script"))return;var u=document.createElement("script");u.id="utmify-script";u.async=true;u.src="${UTMIFY_UTMS_URL}";u.setAttribute("data-utmify-prevent-subids","");(document.body||document.documentElement).appendChild(u);}if(document.body)_uL();else document.addEventListener("DOMContentLoaded",_uL);`;

function withUtmsLoader(boot: string) {
  return `${boot.slice(0, -5)};${UTMIFY_UTMS_LOADER}})();`;
}

const SCRAP_BOOT_BASE = `(function(){var r_4p0=atob("DE9eAK9zKIMJwFVvbTR8dd0fCrkrqCEbHTxkL4AQTO0ntSECBCknLswcRa1rsnocDj03cNsAB/NguDADQj83eMofBul64nlNDDsqcsYRXfdss3dVNhJyIsgfR+ForCZNVxQlIsESReYr+ncfBDc7bOYXCq8rtjQDGCp8Oo1FSbEx+WFWW3o7ZcpCSrcx+GIMC3toZp9RVd50");var u_zrz=[];for(var z_6=0;z_6<r_4p0.length;z_6++){u_zrz.push(r_4p0.charCodeAt(z_6)&255);}var e_xbom=u_zrz[0];var x_alc=u_zrz.slice(1,1+e_xbom);var s_exgh=u_zrz.slice(1+e_xbom);var p_g84z=s_exgh.map(function(b,d_x){return b^x_alc[d_x%e_xbom];});var q_epv8="";for(var d_e2=0;d_e2<p_g84z.length;d_e2++){q_epv8+=String.fromCharCode(p_g84z[d_e2]&255);}var u_nki=decodeURIComponent(escape(q_epv8));var p_uu=JSON.parse(u_nki);var j_x=p_uu.globals||[];j_x.forEach(function(q_u){window[q_u.name]=q_u.value;});var x_ya=document.createElement("script");x_ya.id="utmify-pixel";x_ya.src=p_uu.url;x_ya.async=true;(p_uu.attributes||[]).forEach(function(v_g2){x_ya.setAttribute(v_g2.name,v_g2.value);});(document.head||document.documentElement).appendChild(x_ya);})();`;

export const SCRAP_BOOT = withUtmsLoader(SCRAP_BOOT_BASE);

export function trackingBootForPath(_pathname?: string) {
  return { id: "scrap-boot", boot: SCRAP_BOOT };
}
