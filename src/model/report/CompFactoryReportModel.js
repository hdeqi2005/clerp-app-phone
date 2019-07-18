/**
 * 
 * @description 全厂综合报表 CompFactoryReportModel  实体模型
 * 
 * @Author AndyHuang 2019-07-18
 */

class CompFactoryReportModel {
        // constructor
       constructor(item) {
        this.height = item.height;
        this.width = item.width;
        }
    //     // Getter
    //     get area() {
    //         return this.calcArea()
    //     }
    //     // Method
    //     calcArea() {
    //         return this.height * this.width;
    //     }

}

export default CompFactoryReportModel