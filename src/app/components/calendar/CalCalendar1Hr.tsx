 import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function CalCalendar1Hr() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"60min"});
      cal("ui", {"theme":"dark","cssVarsPerTheme":{"light":{"cal-brand":"#047a7e"},"dark":{"cal-brand":"#047a7e"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <Cal namespace="60min"
    calLink="sederrick-davis-gfumjo/60min"
    style={{width:"100%",height:"100%",overflow:"scroll"}}
    config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}}
    
    
  />;
};
  