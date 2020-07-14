module.exports = {
    title: '鹿啦啦',
    description: '鹿啦啦的博客',
    //  指定 vuepress build 的输出目录
    dest: './dist',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/lulalaBlog/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    plugins: [
        ['@vuepress/pwa', {
            serviceWorker: true,
            popupComponent: 'MySWUpdatePopup',
            updatePopup: {
                message: "新的风暴已经出现",
                buttonText: "盘他"
            }
        }],
        ['@vuepress/google-analytics', {
            //  谷歌ga ID
            ga: '**-*********-*'
        }],
        ['@vuepress/medium-zoom', true]
    ],
    themeConfig: {
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/yilinglulala/lulalaBlog.git',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',
        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'https://github.com/yilinglulala/lulalaBlog',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: 'Git EditLink',
        // 文档更新时间：每个文件git最后提交的时间,
        lastUpdated: 'Last Updated',
        // 侧边栏搜索深度
        sidebarDepth: 2, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        // 首部导航配置
        nav: [
            { text: 'Wiki', link: '/FAQ/Wiki' },
            {
                text: 'JS', items: [
                    { text: '基础', link: '/JS/Base/list/' },
                    { text: '进阶', link: '/Another/Project' },
                    { text: 'ES6', link: '/Another/Fillory' },
                    { text: '设计模式', link: '/Another/Review' }
                ]
            },
            { text: 'FAQ', link: '/FAQ/Console/A000' },
            { text: 'Store', link: '/Store/' },
            { text: 'Thought', link: '/Thought/' },
            {
                text: 'Another',
                items: [
                    { text: 'MySelf', link: '/Another/MySelf' },
                    { text: 'Project', link: '/Another/Project' },
                    { text: 'Fillory', link: '/Another/Fillory' },
                    { text: 'Review', link: '/Another/Review' }
                ]
            }
        ],
        // 侧栏配置
        sidebar: {
            '/JS/': [
                ['/FAQ/Wiki', 'Wiki'],
                {
                    title: '基础',
                    children: [
                        ['/JS/Base/list', '列表'],
                        ['/JS/Base/scope', '作用域'],
                        ['/JS/Console/A001', '#A001_VuePress_1'],
                        ['/JS/Console/A002', '#A002_VuePress_2']
                    ]
                },
                {
                    title: '进阶',
                    children: [
                        ['/JS/Base/list', '#列表'],
                    ]
                },
                {
                    title: 'ES6',
                    children: [
                        ['/JS/Base/list', '#列表'],
                    ]
                },
                {
                    title: '设计模式',
                    children: [
                        ['/JS/Base/list', '#列表'],
                    ]
                }
            
            ],
            '/FAQ/': [
                ['/FAQ/Wiki', 'Wiki'],
                {
                    title: 'Console',
                    children: [
                        ['/FAQ/Console/A000', '#FAQ1000'],
                        ['/FAQ/Console/A001', '#A001_VuePress_1'],
                        ['/FAQ/Console/A002', '#A002_VuePress_2']
                    ]
                },
                {
                    title: 'Digest',
                    children: [
                        ['/FAQ/DigestionHeap/Digested', '#Digested'],
                        ['/FAQ/DigestionHeap/Digesting', '#Digesting'],
                        ['/FAQ/DigestionHeap/DigestWill', '#DigestWill']
                    ]
                }
            ],
            '/Thought/': [
                ['', 'Thought']
            ],
            '/Store/': [
                ['', 'Store'],
                {
                    title: 'WebDev',
                    children: [
                        ['/Store/Dev/Links', '#Links'],
                        ['/Store/Dev/Issue', '#Issue']
                    ]
                },
            ],
            '/Another/': [
                ['/Another/MySelf', '#MySelf'],
                ['/Another/Project', '#Project'],
                ['/Another/Fillory', '#Fillory'],
                ['/Another/Review', '#Review']
            ]
        }
    }
};

