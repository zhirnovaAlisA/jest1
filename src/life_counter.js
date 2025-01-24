export default function colorCounting(objectName, objectHealth){
    if(objectHealth > 50){
        return "healthy"
    }else if (objectHealth> 15 && objectHealth < 51 ){
        return "wounded"
    }else if (objectHealth < 15){
        return "critical"
    }
}