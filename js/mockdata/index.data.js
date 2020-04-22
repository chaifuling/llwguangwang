
Mock.mock('nav.php', {
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|2-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'name':"@cname"
    }]
})
Mock.mock('list.php', {
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'img':[Mock.Random.dataImage("300x250","300x250"),Mock.Random.dataImage("300x250","300x250"),Mock.Random.dataImage("300x250","300x250"),Mock.Random.dataImage("300x250","300x250")],
        'content':"新年转发这个《请回答1988》里的锦鲤男孩——金正峰！中彩票暴富，游戏打通关，去寺庙能偶遇大人物，就连被小混混追杀也能遇见真爱游戏打通关，去寺庙能偶遇大人物，就连被小混混追杀也能遇见真爱",
        'img_tuo':"",
        'name':"清华大学",
        'commmet':"112",
        'time':"2013-1-31",
        'title':"UI设计：为什么说Apple设计细节是魔鬼",
        'transmit_count':100,
        'remark_count':100,  //评论
        'praise_count':100,
        'type|1-3': 1,
    }]
})

Mock.mock('list_tuo.php', {
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|4': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'text':"暗杀伊朗苏莱曼尼少将的“大片刀”，地狱火AGM–114R9X导弹",
    }]
})

Mock.mock('sss.php', {
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|2': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'imga':"",
        'name':"QQ"
    }]
})
Mock.mock('imgs.php',{
'list|5':[{
     'id|+1':1,
     'img':"",
     'name':"生活很美好",
     'text':"庆余年也太穷了，女演员发饰是批发的吗",

}]
})

Mock.mock('list_one.php',{
    'list|6':[{
         'id|+1':1,
         'img':"",
         'title':"刺激战场三岁",
         'text':"专注游戏主播五年",
         'type|1-3':1,
         'v|0-1':0,
    }]
    })
    
Mock.mock('list_two.php',{
    'list|6':[{
        'id|+1': 1,
        'img':Mock.Random.dataImage("300x250","300x250"),
        'content':"新年转发这个《请回答1988》里的锦鲤男孩——金正峰！中彩票暴富，游戏打通关，去寺庙能偶遇大人物，就连被小混混追杀也能遇见真爱游戏打通关，去寺庙能偶遇大人物，就连被小混混追杀也能遇见真爱",
        'img_tuo':"",
        'name':"清华大学",
        'commmet':"112",
        'time':"2013-1-31",
        'title':"UI设计：为什么说Apple设计细节是魔鬼",
        'transmit_count':100,
        'remark_count':100,
        'praise_count':100,
        'type|1-3': 1,
    }]
    })


Mock.mock('list_three_a.php',{
    'list|3':[{
        'id|+1':1,
        'img':"",
        'title':"刺激战场三岁",
        'text':"专注游戏主播五年",
        'type|1-3':1,
        'v|0-1':0,
    }]
    })
Mock.mock('list_three_b.php',{
    'list|6':[{
        'id|+1': 1,
        'url':Mock.Random.dataImage("300x250","300x250"),
        'content':"新年转发这个《请回答1988》里的锦鲤男孩——金正峰！中彩票暴富，游戏打通关，去寺庙能偶遇大人物，就连被小混混追杀也能遇见真爱游戏打通关，去寺庙能偶遇大人物，就连被小混混追杀也能遇见真爱",
        'img_tuo':"",
        'name':"清华大学",
        'commmet':"112",
        'time':"2013-1-31",
        'title':"UI设计：为什么说Apple设计细节是魔鬼",
        'transmit_count':100,
        'remark_count':100,
        'praise_count':100,
        'type|1-2': 1,
    }]
    })


Mock.mock('center_list_a.php',{
    'list|8':[{
        'id|+1':1,
        'img':"",
        'title':"生活很美好",
        'text':"老来网高级产品经理",
        'type|1-3':1,
        'v|0-1':0,
        'Concern|0-1':0,
    }]
    })

Mock.mock('right_list_ul.php',{
    'list|2':[{
        'id|+1':1,
        'text':"网贷平台”赚啦“涉嫌非法被立案侦查，此前宣布良性退出哈哈哈哈哈",
        'time':"2019-11-12",
}]
})


Mock.mock('center_list_b.php',{
    'list|8':[{
        'id|+1':1,
        'img':"",
        'title':"生活很美好",
        'text':"老来网高级产品经理",
        'type|1-3':1,
        'v|0-1':0,
        'Concern|0-1':0,
    }]
    })

    Mock.mock('list-video.php',{
        'list|10':[{
             'id|+1':1,
             'url':"",
             'name':"清华大学",
             'text':"UI设计：为什么说Apple设计细节是魔鬼",
             'num1':"1000",
             'num2':"1000",
             'img':"",
        }]
        })

        Mock.mock('GZ_list.php',{
            'list|8':[{
                'id|+1':1,
                'img':"",
                'title':"生活很美好",
                'text':"老来网高级产品经理",
                'type|0-1':0,
                'v|0-1':0,
              
            }]
            })
            Mock.mock('HD_list.php',{
                'list|10':[{
                    'id|+1':1,
                    'img':"",
                    'title':"分享2020年的愿望，拥抱希望开始新的一年!",
                    'max_time':"2019-12-12 9:00",
                    'min_time':"2019-10-10 9:00",
                    'type':["官方活动","线上活动","其他"],
                    'v|0-1':0,
                    'count':"33",
                    'type_a|0-1':0,   /*未报名  已报名*/
                    'type_b|0-1':0,     /*活动结束   活动开始*/  
                  
                }]
                })

Mock.mock('ul_list.php', {
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|3': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'img':[Mock.Random.dataImage("300x250","300x250"),Mock.Random.dataImage("300x250","300x250"),Mock.Random.dataImage("300x250","300x250"),Mock.Random.dataImage("300x250","300x250")],
        'content':"新年转发这个《请回答1988》里的锦鲤男孩——金正峰！中彩票暴富，游戏打通关，去寺庙能偶遇大人物，就连被小混混追杀也能遇见真爱游戏打通关，去寺庙能偶遇大人物，就连被小混混追杀也能遇见真爱",
        'img_tuo':"",
        'name':"清华大学",
        'commmet':"112",
        'time':"2013-1-31",
        'title':"UI设计：为什么说Apple设计细节是魔鬼",
        'transmit_count':100,
        'remark_count':100,
        'praise_count':100,
        'type|1-3': 1,
    }]
})


Mock.mock('HDXQ_list_a.php', {
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|7': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'img':"",
       
    }]
})

Mock.mock('SP_right_list.php', {
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|6': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'img':Mock.Random.dataImage("300x250","300x250"),
        'text':"三星发布两款新机嘎啦是还会1.0和其他有什么区别改好v嘘嘘发的阿萨德",
        'url':"https://www.w3school.com.cn/i/movie.ogg",
    }]
})  

Mock.mock('LBT_list.php', {
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'img_list':[
            {'lid':1,'img':"images/llw-logo.png"},
            {'lid':2,'img':"images/JT1.png"},
            {'lid':3,'img':"images/微信 (3)@2x.png"},
            {'lid':4,'img':"images/老来网logo组合.png"},
            {'lid':5,'img':"images/1组 2.png"},
            {'lid':6,'img':"images/微信朋友圈.png"},
            {'lid':7,'img':"images/组 3@2x.png"},
        ],
    }]
})


Mock.mock('radio_list_a.php', {
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'radio_arr':[
            {'lid':1,'text':"无图"},
            {'lid':2,'text':"单图"},
            {'lid':3,'text':"多图"},
            {'lid':4,'text':"大图"},
        ],
    }]
})
