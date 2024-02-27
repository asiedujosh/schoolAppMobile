const positionMap = (correctMarkArr, originalArr, topicArr) => {
  let dataInfo = [];

  originalArr.map(item => {
    let results = correctMarkArr.filter(item2 => item2.topicId == item.topicId);
    let totalTopicInQUiz = originalArr.filter(
      item3 => item3.topicId == item.topicId,
    );
    if (results.length > 0) {
      let newObj = {
        topicId: item.topicId,
        recurring: results.length,
        totalTopic: totalTopicInQUiz.length,
      };
      dataInfo.push(newObj);
    } else {
      let newObj = {
        topicId: item.topicId,
        recurring: 0,
        totalTopic: totalTopicInQUiz.length,
      };
      dataInfo.push(newObj);
    }
  });

  let uniqueData = dataInfo.filter(
    (item, index, self) =>
      index === self.findIndex(t => t.topicId === item.topicId),
  );

  uniqueData.map(item2 => {
    let dataArr = topicArr.filter(item => item.id == item2.topicId);
    return (item2.topic = dataArr[0].topic);
  });

  return uniqueData;
};

export default positionMap;
