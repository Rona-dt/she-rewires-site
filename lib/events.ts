// Removed "server-only" as fs is no longer used
// Removed fs and path imports

export interface EventFrontmatter {
  title: string
  author?: string
  date: string
  cover?: string
  head?: any[]
  // 为了兼容性，添加可选的英文字段
  title_en?: string
  location_zh?: string
  location_en?: string
  cover_image?: string
  tags?: string[]
  type?: "upcoming" | "past"
}

export interface Event extends EventFrontmatter {
  slug: string
  content: string
  // 处理后的字段
  displayTitle: string
  displayTitleEn: string
  displayDate: string
  displayCover: string
  displayLocation: string
  displayLocationEn: string
  displayTags: string[]
  displayType: "upcoming" | "past"
}

// Hardcoded event data for Next.js environment
const mockEventsData: Event[] = [
  {
    slug: "beyond-expo-shetech-summit-2025",
    title: "活动回顾｜澳门BEYOND EXPO：SHETECH女性科技峰会与社群力量",
    author: "SheRewires她原力",
    date: "2025年06月02日",
    location_zh: "澳门",
    location_en: "Macau",
    cover_image:
      "https://mmbiz.qpic.cn/mmbiz_jpg/IgC8qcE9jPShxLWlzibjeJx9Lgp8ISpFvPOyUU5jvMdfKUoS7tSng1eQbicsIP1rqjAnxW95F15PDf44M84wo88A/640?wx_fmt=jpeg&from=appmsg",
    tags: ["summit", "community", "technology", "women-in-tech"],
    type: "past",
    head: [["meta", { name: "活动" }]],
    content: `
# 活动回顾｜澳门BEYOND EXPO：SHETECH女性科技峰会与社群力量

![Image](https://mmbiz.qpic.cn/mmbiz_jpg/IgC8qcE9jPShxLWlzibjeJx9Lgp8ISpFvPOyUU5jvMdfKUoS7tSng1eQbicsIP1rqjAnxW95F15PDf44M84wo88A/640?wx_fmt=jpeg&from=appmsg)

  

2025年5月21日至24日，She Rewires她原力在澳门2025BEYOND Expo期间，成功联合举办了备受瞩目的BEYOND SHETECH SUMMIT女性科技峰会，并同步发起了一系列“她·原力场”社群行动。本次系列活动集结了强大的女性科技影响力，共同探索前沿科技，共塑未来社会的美好想象。

  

**Part 1BEYOND SHETECH SUMMIT****高光时刻**

**作为本届**BEYOND Expo的核心论坛之一，5月22日的BEYOND SHETECH SUMMIT女性科技峰会汇聚了来自全球的女性科技领袖、创业者、科学家与跨界创新者，围绕科技、商业、文化与女性领导力等前沿议题展开深度对话。各场圆桌均碰撞出精彩火花，生动呈现了女性如何在科技变革的浪潮中打破边界、引领未来。

  

![Image](https://mmbiz.qpic.cn/mmbiz_jpg/IgC8qcE9jPShxLWlzibjeJx9Lgp8ISpFvTaicgEFxmjVheW5MiaPtTCgiciaVmVX2Jt9icudZBfmQkibdzZpUtYmm1wBg/640?wx_fmt=jpeg&from=appmsg)

  

在充满了激情四射的开场之后，She Rewires她原力创始人和共建者Jill Tang论坛开幕的时候感谢BEYOND团队不仅使这次峰会成为可能，而且将女性在STEM领域置于亚洲最具未来面向的平台Beyond Expo的前沿。  
  

而这一时刻至关重要。  
  

因为当女性登台时，叙事发生了变化。当年轻女性带头时—整个系统都在演变。因为能见度引发可能性。当女性在科技领域被看见、被听到并被赞美时，它创造了涟漪效应— 解锁了信念、资金、合作和创新，这些可能性可能不会发生。  
  

![Image](https://mmbiz.qpic.cn/mmbiz_jpg/IgC8qcE9jPShxLWlzibjeJx9Lgp8ISpFv3Py9KSzMSmFKfJMN8ULFANSYKpNXDt8bp5dVAok2kyUzwJ6n5CdYkA/640?wx_fmt=jpeg&from=appmsg)

She Rewires她原力创始人和共建者Jill Tang

  

Panel 1 **以使命驱动创新：女性视角重塑科技领导力**

![Image](https://mmbiz.qpic.cn/mmbiz_jpg/IgC8qcE9jPShxLWlzibjeJx9Lgp8ISpFv5Qp4q5F0spDqibqdkriada1gac8kXC00mwZU9tHDy0pPIEDnBnQF226A/640?wx_fmt=jpeg&from=appmsg)

圆桌嘉宾（左起）：桑璐璐Lulu Sang (微软大中华区开发者社群负责人)、罗甘霖Grace Luo (埃森哲大中华区通信媒体高科技事业部董事总经理)、于盈Carol Yu (深圳科创学院创始合伙人、副院长)、Prof. Carrie Ling (香港科技大学创业中心主任、综合系统与设计系客座助理教授)

  

Panel 1围绕“以使命驱动创新”展开深度对话，四位嘉宾探讨了女性领导者如何在AI转型、创新教育、硬科技孵化等领域，以其独特的“以人为本”的视角、共情力与韧性，平衡商业追求与社会价值，重塑科技领导力。

  

埃森哲大中华区通信媒体高科技事业部董事总经理Grace Luo 强调在企业变革中融入使命感，并以“温柔而坚定”的方式赋能团队与客户；深圳科创学院创始合伙人、副院长Carol Yu 分享了其以“赋能他人”为使命的跨界历程，并点出女性视角对产品创新的关键作用；香港科技大学创业中心主任Prof. Carrie Ling 则从高校创新与工程教育出发，阐述了培养下一代创业精神与支持女性科技人才的重要性。嘉宾们认为，在AI时代，理解业务、人的判断力及持续学习是不可替代的价值，并鼓励女性保持热爱与好奇，勇于突破，找到自己的节奏与力量。

  

**Panel 2** **从亚洲到全球：利用区域专长推动全球影响力**

![Image](https://mmbiz.qpic.cn/mmbiz_jpg/IgC8qcE9jPShxLWlzibjeJx9Lgp8ISpFvuqLYV0LXgkjq4wa2AQFsiaSOacHWmcP74iabjpF5TAhVv7GbVTJ9Qeew/640?wx_fmt=jpeg&from=appmsg)

圆桌嘉宾（左起）：Xinmei Shen (《南华早报》科技新闻部记者)、江琳 Elaine Jiang (Humansa创始合伙人)、Olivia Plotnick (Wai Social创始人)、Sarah Tong (教育科技公司Big Bang Academy联合创始人)

  

Panel 2以“从亚洲到全球：区域专长赋能全球变革”为主题，汇聚健康科技、数字营销与教育创新领域的女性领袖。  

  

Humansa创始合伙人Elaine Jiang强调“主动健康管理”的全球趋势，通过科技及个性化方案重塑长寿产业；Wai Social创始人Olivia Plotnick剖析中国数字生态对全球品牌的启示，指出深入理解亚洲营销理念是很意思的；Big Bang Academy联合创始人Sarah Tong则聚焦STEM教育如何培养下一代“AI原住民”，呼吁以好奇心驱动学习，弥合技术鸿沟。从她们的分享中我们看到，亚洲不仅是技术试验场，更是全球问题解决的灵感引擎。

**Panel 3** **开创未来：女性引领硬科技革命**

**![Image](https://mmbiz.qpic.cn/mmbiz_jpg/IgC8qcE9jPShxLWlzibjeJx9Lgp8ISpFvOs02ViaJMUz7iaJaJbNFBvzrt2DyPhibHKOALSvswox3gdrEBSHHXWZ2g/640?wx_fmt=jpeg&from=appmsg)**

圆桌嘉宾（左起）：赵育颖Rita Chao (Hong Kong X 前海基金总经理、旭柔计划联合发起人)、白惠源博士Dr. Isabella Bai (ELU.AI 中能坤域创始人、董事长兼CEO)、杨疆博士Dr. Jiang Yang (自由量级联合创始人，Pi (AI-Native内容创作共享平台) 创始人)、Prof. Lishuai Li (香港城市大学协理副校长（策略研究），数据科学系副教授)、梁欢欢Huanhuan Liang (中山大学药学院（深圳）教授，广州恩迈生物有限公司创始人)

  

Panel 3以“开创未来：女性引领硬科技革命”为主题，汇聚了人工智能、机器人、生物科技及航空航天等前沿领域的女性科学家、创业者与战略专家。她们共同探讨了具身智能发展、技术从理论到产业应用的转化、以及女性科技领导力等话题，强调了女性以跨学科创新能力和坚韧特质在硬科技创业中的独特价值，并鼓励更多女性参与技术创新和产业变革。

  

嘉宾们一致认为，未来的科技变革不仅依赖技术突破，更需深刻的社会需求洞察与系统思维整合。在具身智能、生成式AI与生命科学等关键赛道，女性正以“硬核科研+柔性领导力”推动深科技向善向实，引领“科学走出象牙塔，技术走进真实世界”。

  

**Panel 4** **资本赋能新势力：****女性投资人如何推动下一代创业浪潮**

**![Image](https://mmbiz.qpic.cn/mmbiz_jpg/IgC8qcE9jPShxLWlzibjeJx9Lgp8ISpFvQrQ4m3S5HXuXDibbLicbk1CvcX0ib7MCIibDz7yicaibatyvVLnQwva1DdKA/640?wx_fmt=jpeg&from=appmsg)**

圆桌嘉宾（左起）：郑菊然Kelsey Cheng (财新国际公司新闻主管)、潘俐文Renee Pan (戈壁创投常务董事/董事总经理)、张倩Cynthia ZHANG (天际资本创始人)、陳幗貞Jayne Chan (香港投资推广署初创企业主管

  

Panel 4以“资本赋能新势力：女性投资人如何推动下一代创业浪潮”为主题，汇聚了三位投资界优秀女性领袖。她们分享了如何通过资本与经验支持创业者，并探讨了女性投资人在科技和创业领域的独特优势。  

  

戈壁创投常务董事/董事总经理Renee谈到了关注女性科技创业的个人动力，天际资本创始人Cynthia分享了选择支持创始人的原则，香港投资推广署初创企业主管Jayne则从公共部门角度分析了成功初创生态系统的要素。尽管女性主导的初创公司仍然面临融资挑战，Panel中嘉宾们强调了推动这一变化的紧迫性，并鼓励更多女性在投资和创业领域发挥领导力。

  

**Panel 5** **打破既定系统：她创始人如何重写创业剧本**

**![Image](https://mmbiz.qpic.cn/mmbiz_jpg/IgC8qcE9jPShxLWlzibjeJx9Lgp8ISpFvRicicSYKGhMdaDnbOI7TG27I2oOnjWAZiaInSY2H65xbcnxe6VAQammjA/640?wx_fmt=jpeg)**

圆桌嘉宾（左起）：Jill Tang (她原力创始人&社群共建者)、孟思君(芨影科技有限公司联合创始人、副总裁)、Yutong Li (COO of Sonic SVM)、Lorraine Sin, LMHC (Research Director, Lirvana Labs, Inc., Maker of Yeti Confetti Kids)、金李娜Lina Jin (FungiFuture 创始人CEO，分布式垂直农业品牌 “超级菇菇”合伙人)

  

Panel 5聚焦四位“不按常规出牌”的女性创始人如何用“反向思维”打破行业天花板。  

  

FungiFuture创始人CEO金李娜从市场需求出发反推材料技术，实现菌丝皮革的规模化生产，引领生物材料商业落地；芨影科技联合创始人＆副总裁盂思君则从临床经验切入，用AI为基层医疗构建真正可负担、可部署的系统，强调“需求先行”的技术逻辑；SONIC SVM首席运营官李语桐以“注意力资本”重构用户激励机制，打破Web3的炒作定式，探索数字经济的新范式；Yeti Confetti Kids研究主管Lorraine Sin以科研思维投身教育科技，将AI教育产品送入最需要帮助的黎巴嫩难民营，以实际行动回应“商业价值从善而生”。她们的故事共同证明：当女性创业者以用户为原点、以使命为驱动，创新不再是对规则的挑战，而是对未来的重塑。

  

**Part2 She Rewires****社群行动日志**

围绕峰会主场，She Rewires她原力亦策划了形式多元的“她·原力场”社群共创与亮点互动，致力于将峰会的思想火花延伸至更广泛的连接与实践，让每一位女性的探索都值得被看见，每一段链接都可能点亮未来。

  

**🏙****城市探索****×****展会热身**

5月21日早上，我们走进澳门街头，以Citywalk的形式连接城市脉搏与科技灵感，拉近彼此距离，在轻松漫步与交流中开启属于“她们”的探索之旅。

  

![Image](https://mmbiz.qpic.cn/mmbiz_jpg/IgC8qcE9jPShxLWlzibjeJx9Lgp8ISpFvseZibbVOEk6SjjHgiaOKfIY2FTLj57g16hmjYa41epcpnpcfzxBQgXZw/640?wx_fmt=jpeg&from=appmsg)

拍摄于澳门地标大三巴前

  

🎤**开幕式高光：****Z****世代对话王坚院士**

**![男人和女人在跳舞
AI 生成的内容可能不正确。](https://mmbiz.qpic.cn/mmbiz_jpg/IgC8qcE9jPShxLWlzibjeJx9Lgp8ISpFvTaJ53qEdBn2GdEgrBdOaSSfw8SmiaQRmEIwOibbFYhGvkMeictJPdickgQ/640?wx_fmt=jpeg&from=appmsg)**

社群成员Skylar（左）提问王坚院士（右）

  

在5月21日BEYOND Expo的开幕式环节，她原力港澳社群共建者和SHETECH论坛GenZ Host，即将赴纽约大学深造人机交互的港澳社群成员Skylar，向王坚院士就“三体计算星座”研究提出了关于“目标与过程”的深刻提问。

  

王坚院士认真回应，并强调“未来属于拥有使命感、文理兼修的复合型人才”。这一跨代对话，不仅展现了年轻科技女性的思考深度，也预示着领导力从此刻启航的无限可能。年轻科技女性正在用发声与行动，点亮属于自己的舞台。

  

👥**Mentor Walkie Talkie &** **社群力量闪耀**

展会期间（5月23日至24日），She Rewires特别推出的Mentor Walkie Talkie活动，为社群成员和活动参与者们创造了与行业导师一同深度逛展的宝贵机会。在轻松的漫步与交流中，大家不仅获取了前沿的行业见解，更建立了真实而有温度的职业链接。同期的“BEYOND探索”小任务，也鼓励着更多科技女性主动发现BEYOND Expo的多元亮点，积极思考与表达。

![一群人站在台上
AI 生成的内容可能不正确。](https://mmbiz.qpic.cn/mmbiz_jpg/IgC8qcE9jPShxLWlzibjeJx9Lgp8ISpFvQE9wDicicK0t007EOgMwuRDRev3AeNkic17qQos8LhqRoNicPiaQqlmwVLQ/640?wx_fmt=jpeg&from=appmsg)

Mentor Walkie Talkie活动现场当天掠影

  

![Image](https://mmbiz.qpic.cn/mmbiz_jpg/IgC8qcE9jPShxLWlzibjeJx9Lgp8ISpFv8po6zxyrZCbwgxeP8ObdTPvpiaPiawPUYyG3ngetWx34g9jVuuC23mrw/640?wx_fmt=jpeg&from=appmsg)

社群成员与前NBA运动员，Tru Skye Ventures管理合伙人Metta Sandiford-Artest交流合影

  

在AI峰会上，社群的科技观察者Lemon就“AI安全边界与伦理风险”向OpenAI前全球商业化负责人Zack Kass提出了关键问题，并获得了其富有洞察的回应。

![男人站在人群中打电话
AI 生成的内容可能不正确。](https://mmbiz.qpic.cn/mmbiz_jpg/IgC8qcE9jPShxLWlzibjeJx9Lgp8ISpFvk1Q5btEsVatVqdp6ibdN7zDfaSRe4SmFePycibwAEysEsuW5ZXIibLAiaw/640?wx_fmt=jpeg&from=appmsg)

社群成员Lemon与OpenAI前全球商业化负责人Zack Kass在AI峰会上交流

  

这些互动不仅体现了社群成员的专业素养，也彰显了科技女性在关键议题上的积极参与和影响力。此外，众多社群成员也活跃于各个科技展位，与创始人及团队深入交流，探索合作可能，充分展现了科技女性探索未知、链接资源的热情与活力。

**Part 3****来自****Next Gen****的科技现场札记**

💫她们不只是未来，更是现在的主角

在今年BEYOND SHETECH女性科技峰会的活动上，我们邀请来自澳门科技大学的五位科技女生（涵盖校友及在校学生）登台，为五场圆桌对话揭幕。作为She Rewires社群成员及特邀的Next Gen代表，她们不仅是热情洋溢的参与者，更是敏锐深刻的记录者与未来科技的积极引领者。

  

![Image](https://mmbiz.qpic.cn/mmbiz_jpg/IgC8qcE9jPShxLWlzibjeJx9Lgp8ISpFvJ5JevXtpIawlWnnWuo2w6Y0Ficqmu11PYu38xW2uhbOeUzmBCqK9FDA/640?wx_fmt=jpeg&from=appmsg)

5场圆桌Next Gen host: Rona、Lemon、Cynthia、Skylar、Julie

  

**Rona****：跨界程序员****& LLM****探界泳者** 

"这次回到澳门参与共建She Rewires在Beyond Expo的活动，我内心充满了沉淀后的新感动。从学生时代在澳门点燃Women in Tech的星火，到如今它已汇入She Rewires的江海，这次协助筹办SheTech论坛，连接了这么多优秀的科技女性，看到社群不断壮大，我由衷地感到骄傲与鼓舞。

  

从圆桌的热烈讨论到EXPO Walk的深度交流，我深深为一线科技女性们所展现的真实温度、磅礴能量以及她们以韧性与热爱驱动“科技向善”的实践而触动。在AI浪潮中，我们反复听到“以人为本”的声音——以技术回应真实世界的挑战，以使命感驱动改变。这也让我更坚信，唯有源于个体、凝聚共识、彼此支持的社群力量，才能让更多女性在科技之路上走得更远、更坚定，共同塑造一个更加包容和有温度的未来。"

  

**Lemon****：硅诗旅人****• AI****探界者**

"作为Gen Z主持人，我深刻感受到亚洲之于全球的独特作用和位置，特别是女性蕴含于其中的无限可能性。我印象最为深刻的是女性领导力的温情与多元包容的力量。女性领导力正通过跨代协作、本土洞察与伦理坚守，重新定义科技与人文的边界。同时，人文主义这个话题不曾被科技界所重视。我认为年轻一代应当担负起这个责任去将人文情怀与可持续发展融入AI科技中，并且让更多元化的声音被听到和接收，共同开创一个更加开放温暖的世界。"

  

**Cynthia****：医疗****AI****跨界萌新**

"我是Cynthia，很荣幸担任Panel3的Next Generation Host，也非常感谢她原力平台让我有机会聆听来自硬科技领域的杰出女性嘉宾们分享她们的宝贵经验与前瞻洞察。

  

这次盛会让我收获颇丰，也让我内心的迷茫逐渐被点亮。校园生活让我积累了学业知识，但是我之前还不太清楚我们应该在科技行业具体做什么、怎么做，这次论坛就让我真正的化解了疑惑。原来，在科技与创新的舞台上，女性的力量是如此耀眼而坚定。看到前辈们发光发热的样子，让我对自己的人生目标有了更清晰的认知，我希望能够成为她们，完成从学生到科技女性的蜕变。与几位嘉宾以及社团姐妹们的深入交流，也让我收获了许多关于科技行业的实践经验和前沿见解。这不仅让我受益匪浅，更让我深刻感受到，技术不仅是冰冷的创新，更是有温度的连接和成长。

  

非常荣幸能与大家一同参加这场精彩纷呈的盛会。未来，我也将怀抱热爱与梦想，在硬科技领域坚定前行，不断学习和积累，为推动科技进步贡献属于自己的一份力量。"

  

**Skylar:** **跨学科破界玩家**

"在此次Beyond Expo中，我深刻感受到科技与使命的巨大力量。正如王坚博士在开幕式中所言：“Computing is a traveling companion for humankind on our way to Mars。”科技不仅是我们探索未知世界的工具，更是推动人类社会进步与变革的重要伙伴。  

  

Girls Power所倡导的，从来不是单一性别的未来，而是一个从现在起共同建设的未来，它源自每一位为使命而奋斗的个体。这让我由衷地崇敬那些使命驱动的人们，无论性别、背景如何，大家都在携手书写未来的篇章。正是这种跨越性别与文化的力量，才能真正推动科技与社会的共同进步。"

  

**Julie:** **游戏探索者****—****多重世界漫游者**

"科技的日新月异，正在通过不同的产品和技术走进千家万户。通过这次女性科技峰会，让我了解到了不同行业的女性在科技上的贡献，给予我关于职业道路和未来发展的启发。

  

女性的力量不断地涌现，做到了在科技行业不可忽视的力量，这让我更加坚定了自己在科技道路上前行的信心。她们不仅仅是在跟随技术发展的潮流，更是在用自己的方式参与定义技术的方向——从现实需求出发，从社会痛点切入，用技术回应人性、连接世界。"

**科技重构未来，女性引领想象力**

![Image](https://mmbiz.qpic.cn/mmbiz_jpg/IgC8qcE9jPShxLWlzibjeJx9Lgp8ISpFvE52hZeKjNSeQibeA3eEib1XtXyXd7Bibn9SmibWrxZXG2tb07qJTJ2iaicNQ/640?wx_fmt=jpeg&from=appmsg)

在2025年的BEYOND Expo上，She Rewires用一次次真实的对话与深度的连接，展现出“她力量”如何在科技浪潮中站稳脚步、打破边界、引领未来。就如创始人JILL在SHETECH SUMMIT女性科技论坛闭幕时候提到：

  

“SheTech不仅仅是一个时刻 —— 它是一种思维方式。She Rewires不仅是一个社群 —— 它是一个不断成长的社区，由行动派、建设者、提问者和规则的打破者组成的共建平台。无论你是开发者、设计师、创业者，还是只是充满好奇 —— 这张桌子上都有你的一席之地。”

  

![Image](https://mmbiz.qpic.cn/mmbiz_jpg/IgC8qcE9jPShxLWlzibjeJx9Lgp8ISpFvI0YalCPHmfib8hOuq6uTh4d08GQKqjaaQ0dBBIG85UlUAtz3nfJCzKQ/640?wx_fmt=jpeg&from=appmsg)

  

因为未来不是一个人建造的 —— 它是我们一起共建的。

感谢BEYOND Expo, 感谢每一位讲者、每一位NEXT GEN主持人，以及每一位带着热情而来的社群伙伴。

  

科技需要多元的声音，未来需要真实的共创。

SheTech不是一个终点，而是一场持续的链接与发声行动。她们，正用行动书写答案！

![Image](https://mmbiz.qpic.cn/mmbiz_png/IgC8qcE9jPQGJNY7jCibia8zbZQiaMhBAcaw1coUY271zgChic8ickneSRG4a06jEtG8L7QMgBzvJz9VO5cQtjEPQHw/640?wx_fmt=png)
`,
    displayTitle: "活动回顾｜澳门BEYOND EXPO：SHETECH女性科技峰会与社群力量",
    displayTitleEn: "Event Review | Macau BEYOND EXPO: SHETECH Women's Technology Summit and Community Power",
    displayDate: "2025-06-02",
    displayCover:
      "https://mmbiz.qpic.cn/mmbiz_jpg/IgC8qcE9jPShxLWlzibjeJx9Lgp8ISpFvPOyUU5jvMdfKUoS7tSng1eQbicsIP1rqjAnxW95F15PDf44M84wo88A/640?wx_fmt=jpeg&from=appmsg",
    displayLocation: "澳门",
    displayLocationEn: "Macau",
    displayTags: ["summit", "community", "technology", "women-in-tech"],
    displayType: "past",
  },
  {
    slug: "wechat-z5hcszby1ec82jesubztua",
    title: "公众号活动文章同步（待补图）",
    title_en: "WeChat Event Article Sync (images pending)",
    date: "2025-06-03",
    location_zh: "线上",
    location_en: "Online",
    cover_image: "/placeholder.svg?height=400&width=600&text=WeChat+Event+Article",
    tags: ["wechat", "event", "community"],
    type: "past",
    content: `
# 公众号活动文章同步（待补图）

来源链接：
https://mp.weixin.qq.com/s/z5hCsZbY1EC82JEsuBztuA

> 说明：当前运行环境对微信页面抓取受限（返回微信公众平台壳页 / 图片防盗链限制），
> 已先把该文章入口同步到 Events，后续可通过“图片镜像到自有存储”流程补齐正文与图片。

## 建议补齐流程

1. 将原文正文导出为 Markdown；
2. 把文章图片镜像到自有存储（Vercel Blob/S3）；
3. 替换正文内图片 URL 后再发布到站点。
`,
    displayTitle: "公众号活动文章同步（待补图）",
    displayTitleEn: "WeChat Event Article Sync (images pending)",
    displayDate: "2025-06-03",
    displayCover: "/placeholder.svg?height=400&width=600&text=WeChat+Event+Article",
    displayLocation: "线上",
    displayLocationEn: "Online",
    displayTags: ["wechat", "event", "community"],
    displayType: "past",
  },
  {
    slug: "steam-summit-2024",
    title: "STEAM 领导力峰会 2024",
    date: "2024-09-15",
    location_zh: "上海，中国",
    location_en: "Shanghai, China",
    cover_image: "/placeholder.svg?height=400&width=600&text=STEAM+Leadership+Summit",
    tags: ["summit", "leadership", "steam"],
    type: "upcoming",
    content: `
# STEAM 领导力峰会 2024

这是一个关于 STEAM 领导力峰会的详细内容。

## 议程亮点

*   **主题演讲**: 行业领袖分享最新趋势。
*   **圆桌讨论**: 探讨女性在 STEAM 领域的挑战与机遇。
*   **工作坊**: 实践技能提升。

## 参与者

我们邀请了来自全球的 STEAM 领域的女性专业人士、学生和爱好者。

## 更多信息

请持续关注我们的网站，获取更多关于峰会的更新。
`,
    displayTitle: "STEAM 领导力峰会 2024",
    displayTitleEn: "STEAM Leadership Summit 2024",
    displayDate: "2024-09-15",
    displayCover: "/placeholder.svg?height=400&width=600&text=STEAM+Leadership+Summit",
    displayLocation: "上海，中国",
    displayLocationEn: "Shanghai, China",
    displayTags: ["summit", "leadership", "steam"],
    displayType: "upcoming",
  },
  {
    slug: "ai-ethics-workshop",
    title: "AI 伦理与女性视角",
    date: "2024-10-20",
    location_zh: "深圳，中国",
    location_en: "Shenzhen, China",
    cover_image: "/placeholder.svg?height=400&width=600&text=AI+Ethics+Workshop",
    tags: ["workshop", "ai", "ethics"],
    type: "upcoming",
    content: `
# AI 伦理与女性视角工作坊

本次工作坊将深入探讨人工智能伦理，并特别关注女性在 AI 发展中的独特视角和贡献。

## 议题

*   AI 偏见与公平性
*   数据隐私与安全
*   女性在 AI 伦理治理中的角色

## 目标

旨在提高参与者对 AI 伦理问题的认识，并鼓励更多女性参与到 AI 伦理的讨论和实践中。
`,
    displayTitle: "AI 伦理与女性视角",
    displayTitleEn: "AI Ethics & Women's Perspectives",
    displayDate: "2024-10-20",
    displayCover: "/placeholder.svg?height=400&width=600&text=AI+Ethics+Workshop",
    displayLocation: "深圳，中国",
    displayLocationEn: "Shenzhen, China",
    displayTags: ["workshop", "ai", "ethics"],
    displayType: "upcoming",
  },
]

// 从日期字符串中提取标准日期格式
function parseDate(dateStr: string): string {
  // 处理中文日期格式：2025年06月02日
  const chineseDateMatch = dateStr.match(/(\d{4})年(\d{2})月(\d{2})日/)
  if (chineseDateMatch) {
    const [, year, month, day] = chineseDateMatch
    return `${year}-${month}-${day}`
  }

  // 如果已经是标准格式，直接返回
  if (dateStr.match(/^\d{4}-\d{2}-\d{2}$/)) {
    return dateStr
  }

  // 默认返回原始字符串
  return dateStr
}

// 从标题中提取位置信息
function extractLocationFromTitle(title: string): { zh: string; en: string } {
  // 从标题中提取位置信息，比如 "澳门BEYOND EXPO"
  if (title.includes("澳门")) {
    return { zh: "澳门", en: "Macau" }
  }
  if (title.includes("北京")) {
    return { zh: "北京", en: "Beijing" }
  }
  if (title.includes("上海")) {
    return { zh: "上海", en: "Shanghai" }
  }
  if (title.includes("深圳")) {
    return { zh: "深圳", en: "Shenzhen" }
  }

  return { zh: "中国", en: "China" }
}

// 从标题和内容中提取标签
function extractTags(title: string, content: string): string[] {
  const tags: string[] = []

  if (title.includes("峰会") || title.includes("SUMMIT")) {
    tags.push("summit")
  }
  if (title.includes("科技") || title.includes("TECH")) {
    tags.push("technology")
  }
  if (title.includes("女性") || title.includes("Women")) {
    tags.push("women-in-tech")
  }
  if (title.includes("社群") || title.includes("Community")) {
    tags.push("community")
  }
  if (content.includes("AI") || content.includes("人工智能")) {
    tags.push("ai")
  }
  if (content.includes("创新") || content.includes("Innovation")) {
    tags.push("innovation")
  }

  return tags.length > 0 ? tags : ["event"]
}

// 判断活动类型（过去或即将到来）
function determineEventType(dateStr: string): "upcoming" | "past" {
  const eventDate = new Date(parseDate(dateStr))
  const now = new Date()
  return eventDate > now ? "upcoming" : "past"
}

export function getAllEvents(): Event[] {
  // In a real application, this would fetch from a database or external API.
  // For Next.js, we use hardcoded data.
  return mockEventsData
    .map((event) => ({
      ...event,
      displayTitle: event.title,
      displayTitleEn: event.title_en || event.title,
      displayDate: parseDate(event.date),
      displayCover: event.cover_image || event.cover || "/placeholder.svg?height=400&width=600&text=Event",
      displayLocation: event.location_zh || extractLocationFromTitle(event.title).zh,
      displayLocationEn: event.location_en || extractLocationFromTitle(event.title).en,
      displayTags: event.tags || extractTags(event.title, event.content),
      displayType: event.type || determineEventType(event.date),
    }))
    .sort((a, b) => new Date(b.displayDate).getTime() - new Date(a.displayDate).getTime())
}

export function getEventBySlug(slug: string): Event | null {
  const event = mockEventsData.find((e) => e.slug === slug)
  if (!event) return null

  return {
    ...event,
    displayTitle: event.title,
    displayTitleEn: event.title_en || event.title,
    displayDate: parseDate(event.date),
    displayCover: event.cover_image || event.cover || "/placeholder.svg?height=400&width=600&text=Event",
    displayLocation: event.location_zh || extractLocationFromTitle(event.title).zh,
    displayLocationEn: event.location_en || extractLocationFromTitle(event.title).en,
    displayTags: event.tags || extractTags(event.title, event.content),
    displayType: event.type || determineEventType(event.date),
  }
}
