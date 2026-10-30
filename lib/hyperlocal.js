/**
 * Courier integration seam. Replace this stub with a server-side API route
 * that authenticates the seller and calls a configured courier partner.
 * Never put courier secrets in client-side code.
 */
export async function initiateHyperlocalDelivery(orderId,pickup,drop){
  return {configured:false,orderId,pickup,drop,message:'Courier integration is not configured. No delivery request was sent.',trackingUrl:null};
}
