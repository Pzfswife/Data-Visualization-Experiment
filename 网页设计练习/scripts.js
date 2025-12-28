function parkCar() {
    var licensePlate = document.getElementById('licensePlate').value;

    // 模拟停车过程
    var parkingSuccess = Math.random() < 0.5; // 随机生成停车成功或失败
    if(parkingSuccess) {
        document.getElementById('parkingStatus').innerText = `车牌号为${licensePlate}的车辆已成功停车！`;
    } else {
        document.getElementById('parkingStatus').innerText = `停车失败，请重新尝试！`;
    }
}