export const conditionRates={'Used — Like New':.70,'Like New':.70,'Used — Good':.55,'Good':.55,'Used — Fair':.35,'Fair':.35,'Used — Poor':.20,'Poor':.20};
export function fairPrice(retail,condition){const rate=conditionRates[condition];if(!rate||!Number.isFinite(Number(retail))||Number(retail)<=0)return null;return Math.round(Number(retail)*rate);}
