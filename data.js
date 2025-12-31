export const storyData = {
  ko: {
    story:
      '당신은 한국어 공부를 열심히 했습니다.<br>지난번 만난 한국 친구를 만났어요.<br>친구가 기분이 안 좋아 보이네요!<br>위로와 격려의 말로 마음을 전해 봅시다.',
    start: '친구에게 다가가 위로하기',
    correct: '따뜻한 위로네요! 친구가 힘을 얻었을 거예요.',
    wrong: '조금 더 적절한 위로의 말을 찾아볼까요?',
    gameOverTitle: '게임 오버',
    gameOverDesc: '친구에게 위로를 전하지 못했습니다... 😢',
    restart: '다시 위로해보기',
  },
  vn: {
    story:
      'Bạn đã chăm chỉ học tiếng Hàn.<br>Bạn gặp lại người bạn Hàn Quốc đã gặp lần trước.<br>Bạn của bạn trông có vẻ không được vui!<br>Hãy truyền tải tấm lòng bằng những lời an ủi và khích lệ nhé.',
    start: 'Đến gần và an ủi bạn',
    correct: 'Một lời an ủi thật ấm áp! Chắc hẳn bạn ấy đã có thêm sức mạnh.',
    wrong: 'Chúng ta hãy tìm một lời an ủi phù hợp hơn nhé?',
    gameOverTitle: 'Trò chơi kết thúc',
    gameOverDesc: 'Bạn đã không thể truyền tải lời an ủi đến bạn mình... 😢',
    restart: 'Thử lại lần nữa',
  },
};

export const level1Data = [
  {
    a: '친구: 시험 성적이 생각보다 너무 안 나왔어.',
    av: 'Bạn: Điểm thi thấp hơn mình nghĩ nhiều quá.',
    b: '__, 다음에는 꼭 잘 볼 수 있을 거야!',
    bv: '__, lần sau chắc chắn bạn sẽ làm tốt thôi!',
    ans: ['힘내', '괜찮아', '걱정 마', '기운 내'],
  },
  {
    a: '친구: 아끼던 물건을 잃어버려서 너무 속상해.',
    av: 'Bạn: Mình làm mất đồ vật yêu quý nên buồn quá.',
    b: '__, 정말 마음 아프겠다. 내가 다 속상해.',
    bv: '__, chắc là đau lòng lắm. Mình cũng thấy buồn thay.',
    ans: ['아이구', '어떡해', '세상에', '정말'],
  },
  {
    a: '친구: 오늘 하루 종일 되는 일이 하나도 없네.',
    av: 'Bạn: Cả ngày hôm nay chẳng có việc gì ra hồn cả.',
    b: '__, 그런 날도 있는 법이야. 너무 우울해하지 마.',
    bv: '__, cũng có những ngày như vậy mà.',
    ans: ['토닥토닥', '괜찮아', '힘내', '기운 내'],
  },
  {
    a: '친구: 요즘 공부도 안 되고 너무 지쳐.',
    av: 'Bạn: Dạo này học không vào, mình thấy mệt mỏi quá.',
    b: '__, 잠시 쉬어가도 괜찮아. 넌 충분히 잘하고 있어.',
    bv: '__, nghỉ ngơi một chút cũng không sao đâu.',
    ans: ['힘내', '잘하고 있어', '기운 내', '파이팅'],
  },
  {
    a: '친구: 면접에서 또 떨어졌어. 나만 뒤처지는 기분이야.',
    av: 'Bạn: Mình lại trượt phỏng vấn rồi.',
    b: '__, 너는 충분히 멋진 사람이니까 곧 좋은 소식 있을 거야!',
    bv: '__, vì bạn là một người tuyệt vời...',
    ans: ['절대 아냐', '기운 내', '할 수 있어', '힘내'],
  },
  {
    a: '친구: 약속 시간을 깜빡해서 친구한테 너무 미안해.',
    av: 'Bạn: Mình quên mất giờ hẹn nên thấy có lỗi...',
    b: '__, 진심으로 사과하면 친구도 이해해 줄 거야.',
    bv: '__, nếu bạn xin lỗi chân thành...',
    ans: ['괜찮아', '걱정 마', '자책하지 마', '그럴 수 있어'],
  },
  {
    a: '친구: 밤새워서 과제했는데 파일이 다 날아갔어.',
    av: 'Bạn: Thức trắng đêm làm bài tập mà file mất sạch...',
    b: '__, 진짜 멘붕이었겠다! 다시 하느라 고생 많았어.',
    bv: '__, chắc là hoảng loạn lắm nhỉ!',
    ans: ['헐', '세상에', '어떡해', '말도 안 돼'],
  },
  {
    a: '친구: 아르바이트하다가 실수를 크게 했어.',
    av: 'Bạn: Mình đã mắc sai lầm lớn khi làm thêm.',
    b: '__, 누구나 처음엔 다 그래. 다음에 잘하면 돼!',
    bv: '__, ai mới đầu cũng vậy mà.',
    ans: ['괜찮아', '신경 쓰지 마', '기운 내', '잘할 거야'],
  },
  {
    a: '친구: 몸 컨디션이 너무 안 좋아서 아무것도 못 하겠어.',
    av: 'Bạn: Tình trạng cơ thể không tốt...',
    b: '__, 오늘은 아무 생각 말고 푹 쉬어.',
    bv: '__, hôm nay hãy nghỉ ngơi thật tốt nhé.',
    ans: ['아이고', '어떡해', '푹 쉬어', '몸 조심해'],
  },
  {
    a: '친구: 나 정말 잘해낼 수 있을까? 불안해.',
    av: 'Bạn: Liệu mình có thể làm tốt không? Lo quá.',
    b: '__, 지금까지 잘해왔잖아! 널 믿어봐.',
    bv: '__, từ trước đến nay bạn vẫn làm tốt mà!',
    ans: ['당연하지', '그럼', '걱정 마', '믿어봐'],
  },
];

export const fillerPool = [
  '에이',
  '설마',
  '하아',
  '망했다',
  '아이구',
  '휴',
  '어라',
  '글쎄',
];
