
/* Done : Health Check response server details */
export async function healtCheck(req, res ) {
    var presentDate = Date.now();
    res.send('e-commerce backend service is running time : ' + presentDate)
}