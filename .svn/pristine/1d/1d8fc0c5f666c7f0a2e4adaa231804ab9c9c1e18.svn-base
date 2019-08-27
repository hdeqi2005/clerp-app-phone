<template>
  <div id="app" v-cloak> 
        <headerview :showLeftbtn="false" :showRightbtn="false" title="我"></headerview>
          <div class="MarginTop10"></div>
           <van-cell-group id='tax-van-cell-group'>
				<!-- <van-cell title="" /> -->
				<van-cell>
					<template slot="title">
						<van-cell title="晨龙ERP"  label="">
                            <template slot="icon">
                                <div class="icon-me">
                                     <van-icon  size="40" color="#3296fa" name="manager-o" />
                                </div>
                            </template>
                        </van-cell>
					</template>
				</van-cell>
        </van-cell-group>
         <!-- <div class="MarginTop10"></div> -->

         <van-cell-group title=" ">
            <van-cell  title="偏好设置" is-link >
                <template  slot="icon" >
                    <div class="icon-about">
                         <van-icon size="18" color="#3296fa" name="setting-o" />
                    </div>
                </template>
            </van-cell>
         </van-cell-group>
         <van-cell-group title=" ">
            <van-cell  title="新手指南" is-link >
                 <template  slot="icon" >
                   <div class="icon-about">
                         <van-icon size="18" color="#3296fa" name="bookmark-o" />
                    </div>
                </template>
            </van-cell>
            <van-cell  title="帮助与反馈" is-link  >
                 <template  slot="icon" >
                    <div class="icon-about">
                         <van-icon size="18" color="#3296fa" name="newspaper-o" />
                    </div>
                </template>
            </van-cell>
         </van-cell-group>
          <van-cell-group title=" ">
            <van-cell  title="关于晨龙ERP" is-link >
                <template  slot="icon" >
                     <div class="icon-about">
                         <van-icon size="18" color="#3296fa" name="location-o" />
                    </div>
                </template>
                
            </van-cell>
         </van-cell-group>
         <!-- <van-cell title="单元格" icon="location-o" /> -->
        <footerview></footerview>
  </div>
</template>
<script>
import {setLocalStorage,getLocalStorage } from '@/libs/util'
import baseMixin from '@/mixins'
import {mapActions} from 'vuex'
export default {
    name:'about',
    mixins:[baseMixin],
    data(){
        return {
            msg:''
        }
    },
    methods:{

    }
    
}
</script>
<style >
    .icon-me{
        margin-right: 10px;
    }
    .icon-about{
        margin-right: 5px;
    }
    .icon-about .van-icon{
        line-height: 25px;
    }
</style>