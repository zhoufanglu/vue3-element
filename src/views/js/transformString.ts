/*export default {
  testFn: ()=> {
    console.log('test')
  }
}*/
export default  ()=> {
  /**********************案例测试***********************/
  const topicString: string = '一、判断题\n' +
    '1、服务产品同其他有形产品一样，也强调产品要能满足不同的消费者需求。(√)[易]\n' +
    '2、汽车维修对于确保客户的安全是一项重要的工作。(√) [易]\n' +
    '3、职业理想全凭自己的主观选择。（×）[易]\n' +
    '4、职业道德修养，是指从事各种职业活动的人员，按照职业道德基本原则和规范，在职业活动中所进行的自我教育、自我改造、自我完善，使自己形成良好的职业道德品质和达到一定的职业道德境界。(√) [易]\n' +
    '5、职业素质是劳动者对社会职业了解与适应能力的一种综合体现(√) [易]\n' +
    '6、礼貌接待就是要对客户微笑。（×）[易]\n' +
    '7、对车辆进行维修，首先要有足够的知识和技能。（√）[易]\n' +
    '8、回访一般在维修后三天内进行。（√）[易]\n' +
    '9、维修人员的工作服要统一。（√）[易]\n' +
    '10、维修人员不准染发。（×）[易]\n' +
    '\n' +
    '二、单选题\n' +
    '1、以下不符合服务理念定义的是（D）。[偏易]\n' +
    '（A）保证充足的商品补给     （B）保证商品种类繁多\n' +
    '（C）雇佣称职员工           （D）挑选喜欢的客户\n' +
    '2、以下不符合服务理念定义的是（A）。[偏易]\n' +
    '（A）挑选喜欢的客户         （B）保证商品种类繁多\n' +
    '（C）保证充足的商品补给     （D）将店址选择在交通便利的地段\n' +
    '3、以下符合服务理念定义的是（C）[偏易]\n' +
    '（A）基本的商品补给 （B）商品种类单一 （C）雇佣称职员工 （D）挑选喜欢的客户\n' +
    '4、下列属于维修技工工作职责的是（D）。[偏易]\n' +
    '（A）在能力所及的范围内处理一般的客户需求\n' +
    '（B）分配技术员工作，监督工作，并追踪工作进程[难]\n' +
    '（C）进行维护和修理工作，并在结束后进行最后的检查   （D）进行维护和修理工作\n' +
    '5、下列属于技术员工作职责的是（C）。[难]\n' +
    '（A）在能力所及的范围内处理一般的客户需求\n' +
    '（B）分配技术员工作，监督工作，并追踪工作进程\n' +
    '（C）进行维护和修理工作，并在结束后进行最后的检查   （D）进行维护和修理工作\n' +
    '6、下列属于维修技工工作职责的是（D）。[偏难]\n' +
    '（A）在能力所及的范围内处理一般的客户需求\n' +
    '（B）分配技术员工作，监督工作，并追踪工作进程\n' +
    '（C）进行维护和修理工作，并在结束后进行最后的检查   （D）进行维护\n' +
    '7、职业理想不包括（C）。[偏难]\n' +
    '（A）职业成就   （B）职业种类   （C）职业收入   （D）职业意义\n' +
    '8、根据自己的性格特点选择合适的工作，应该按（B）进行选择。\n' +
    '（A）职业成就   （B）职业种类   （C）职业收入   （D）职业意义\n' +
    '9、职业理想由以下内容构成（B）。[偏难]\n' +
    '（A）职业教育   （B）职业种类   （C）职业收入   （D）职业前景\n' +
    '10、职业道德素质的提高，一方面靠他律；另一方面就取决于自己的主观努力，即（C）。[难]\n' +
    '（A）社会的培养   （B）组织的教育   （C）自我修养   （D）学校教育\n' +
    '\n' +
    '三、多选题\n' +
    '11、职业道德素质的提高，一方面靠他律，即（AB）；另一方面就取决于自我修养。[难]\n' +
    '（A）社会的培养和组织的教育  （B）主观努力  （C）其他原因  （D）客观原因\n' +
    '12、职业道德素质的提高，不取决于的因素（CD）[难]\n' +
    '（A）社会的培养    （B）组织的教育    （C）主观努力    （D）客观原因\n' +
    '13、职业素质是劳动者对社会职业了解与适应能力的一种综合体现，其主要表现在职业兴趣、（AB）、职业个性及职业情况等方面。[难]\n' +
    '（A）职业能力    （B）职业成就    （C）职业收入    （D）职业前景\n' +
    '14、职业素质是劳动者对社会职业了解与适应能力的一种综合体现，其主要表现在职业兴趣、职业能力、（CD）及职业情况等方面[难]\n' +
    '（A）职业收入    （B）职业成就    （C）职业个性    （D）职业前景\n' +
    '15、职业素质是劳动者对社会职业了解与适应能力的一种综合体现，其主要表现在（D）\n' +
    '（A）职业兴趣    （B）职业能力    （C）职业个性    （D）其他选项都是\n' +
    '16、接待首先要在态度上给人（CD）。[适中]\n' +
    '（A）高傲感      （B）冷漠感      （C）亲切感      （D）卑微感\n' +
    '17、在接待时，切忌给客户留下（AD）。[适中]\n' +
    '（A）高傲感     （B）冷漠感     （C）卑微感     （D）其他选项都是\n' +
    '18、接待人员同客户交谈时，要使客户产生（BD）。[适中]\n' +
    '（A）滑稽感     （B）怀疑感     （C）无奈感     （D）亲切感\n' +
    '19、对车辆进行维修，首先要有足够的（AD）。[适中]\n' +
    '（A）证书     （B）知识     （C）技能     （D）知识和技能\n' +
    '20、有了足够的知识和技能，才能对车辆进行（CD）。[适中]\n' +
    '（A）整理     （B）清洁     （C）驾驶     （D）维修\n'
  /*console.log(topicString)
  console.log('----------------')*/

  interface Topic {
    type: string, //类别：单选 多选 判断
    content: string, //题目内容
    options: string, //选项内容
  }

  /*const topicList:Array<Topic> = [{type:'aa', content:'aa', options:'xxx'}]
  console.log(95, topicList)*/

  const endArr: Array<Topic> = []
  //判断题以换行切割
  //多选与单选以']'切割
  topicString.split('\n\n').forEach(i => {
    console.log('-----------------------')
    let topicItemList: any = i.split('\n') //题目数组-这个是根据判断分的数组
    //类别
    let content: string = ''
    let options: string = ''
    const type: string = topicItemList[0]
    /**********************判断题***********************/
    if (type === '一、判断题') {
      for (let i = 1; i < topicItemList.length; i++) {
        content = topicItemList[i].split('。')[0]
        options = topicItemList[i].split('。')[1]
        let topicItem: Topic = {
          type: type,
          content: content,
          options: options
        }
        endArr.push(topicItem)
      }
    }
    /**********************单选，多选题目***********************/
    else {
      let topicItemList2: any = i.split('、') //这个是根据多选 单选分的数组
      for (let j = 2; j < topicItemList2.length; j++) {
        content = topicItemList2[j].split(']')[0]
        options = topicItemList2[j].split(']')[1]

        let topicItem: Topic = {
          type: type,
          content: content,
          options: options
        }
        endArr.push(topicItem)

      }
    }

  })

  return endArr
}