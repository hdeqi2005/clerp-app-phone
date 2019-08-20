import {getValidatorToken,login,getMenuByToken,getCustomerInfo} from  '@/api/user'

//调用expect.assertions(1)，它能确保在异步的测试用例中，
//有一个断言会在回调函数中被执行。这在进行异步代码的测试中十分有效。
  test('getValidatorToken(admin) 获取随机码，用于MD5 加密', () => {
    expect.assertions(1);
    const params = {
        userId:'admin'
      }
    return getValidatorToken(params)
      .then(data => {
        console.warn('getValidatorToken:'+JSON.stringify(data))
        expect(data.success).toBe(true);
      }).catch(err=>{
        console.warn('getValidatorToken err:'+JSON.stringify(err))
      });
  })

  test('getCustomerInfo() 获取过滤选择用户列表', () => {
    expect.assertions(1);
    return getCustomerInfo()
      .then(data => {
        console.warn('getCustomerInfo:'+JSON.stringify(data))
        expect(data.success).toBe(true);
      }).catch(err=>{
        console.warn('getCustomerInfo err:'+JSON.stringify(err))
      });
  })