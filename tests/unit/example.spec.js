 import { shallowMount,mount,render,renderToString,createLocalVue,createWrapper,config   } from '@vue/test-utils'
 //fix [Vue warn]: Unknown custom element  vue项目用jest写单元测试用例，项目中引入了Vant的相关组件，但是报找不到那些组件
 import Vue from 'vue'
 import Vant from 'vant'
 //import 'vant/lib/index.css'
 //import config from '@/config' //自定义全局变量
 Vue.use(Vant)
 Vue.prototype.$config = config

 //import header from '@/components/header'
 import testComp from '@/components/testComp'
 //import login from '@/views/login/login.vue'

 describe('testComp.vue', () => {
  it('renders a color', () => {
    //mount{参数：component} 创建一个包含被挂载和渲染的 Vue 组件的 Wrapper。
    const wrapper = mount(testComp, {
      propsData: {
        color: 'red'
      }
    })
    expect(wrapper.props().color).toBe('red')
  })
  
})

describe('HelloWorld.vue', () => {
    it('renders props.msg when passed', () => {
    
    })
  test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
})

describe('testComp.vue', () => {
   // 现在挂载组件，你便得到了这个包裹器
   const wrapper = mount(testComp)

  test('是一个 Vue 实例', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  // 也便于检查已存在的元素
  test('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
  // const button = wrapper.find('button')
  // console.log('button===:'+JSON.stringify(button))
  // expect(wrapper.vm.count).toBe(0)
  test('button click then count =1', () => {
      expect(wrapper.vm.count).toBe(0)
      const button = wrapper.find('button')
      button.trigger('click')
      expect(wrapper.vm.count).toBe(1)
  })
 
})


const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


// 数字
// 大多数的比较数字有等价的匹配器
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('两个浮点数字相加', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           这句会报错，因为浮点数有舍入误差
  expect(value).toBeCloseTo(0.3); // 这句可以运行
});

// 字符串
// 您可以检查对具有 toMatch 正则表达式的字符串︰

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});


