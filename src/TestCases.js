const ArtWorks = [
  {
    id: 0,
    title: "별이 빛나는 밤",
    authorWord: "밤하늘 속에서 빛나는 별의 풍경을 상상하며 감상해주세요.",
    introduction: "string",
    size: "500 X 300",
    productionMethod: "캔버스 위에 수채화",
    price: 50000,
    forSale: true,
    thumbnail: "string",
    imagesUrl: ["string"],
  },
  {
    id: 2,
    name: "second",
    artist: "bbb",
    horizontal: 200,
    vertical: 100,
    how: "캔버스 위에 수채화",
    howmuch: 50000,
    about:
      "칠하는 과정에 있어서도 단순히 붓을 칠하는 것을 넘어서 붓의 자루 혹은 갈대로 표면을 긁어냄으로서 독특한 화풍을 연출했다.",
    artistsay: "밤하늘 속에서 빛나는 별의 풍경을 상상하며 감상해주세요.",
  },
  {
    id: 3,
    name: "third",
    artist: "ccc",
    horizontal: 200,
    vertical: 100,
    how: "캔버스 위에 수채화",
    howmuch: 50000,
    about:
      "칠하는 과정에 있어서도 단순히 붓을 칠하는 것을 넘어서 붓의 자루 혹은 갈대로 표면을 긁어냄으로서 독특한 화풍을 연출했다.",
    artistsay: "밤하늘 속에서 빛나는 별의 풍경을 상상하며 감상해주세요.",
  },
  {
    id: 4,
    name: "forth",
    artist: "ddd",
    horizontal: 200,
    vertical: 100,
    how: "캔버스 위에 수채화",
    howmuch: 50000,
    about:
      "칠하는 과정에 있어서도 단순히 붓을 칠하는 것을 넘어서 붓의 자루 혹은 갈대로 표면을 긁어냄으로서 독특한 화풍을 연출했다.",
    artistsay: "밤하늘 속에서 빛나는 별의 풍경을 상상하며 감상해주세요.",
  },
  {
    id: 5,
    name: "fifth",
    artist: "eee",
    horizontal: 200,
    vertical: 100,
    how: "캔버스 위에 수채화",
    howmuch: 50000,
    about:
      "칠하는 과정에 있어서도 단순히 붓을 칠하는 것을 넘어서 붓의 자루 혹은 갈대로 표면을 긁어냄으로서 독특한 화풍을 연출했다.",
    artistsay: "밤하늘 속에서 빛나는 별의 풍경을 상상하며 감상해주세요.",
  },
];

const TestDiaries = [
  {
    id: 1,
    title: "주제 구상하기",
    date: "2024.04.01",
    artist: "aaa",
    name: "first",
  },
  {
    id: 2,
    title: "스케치를 시작하며",
    date: "2024.04.12",
    artist: "aaa",
    name: "first",
  },
];

const GroupExhibitions = [
  {
    id: 1,
    name: "제 11회 서울시립대학교 디자인과 전시회",
  },
  {
    id: 2,
    name: "2024년도 1학기 OO대학교 졸업작품 전시회 ",
  },
  {
    id: 3,
    name: "2024년도 2월 ~~ 전시회",
  },
  {
    id: 4,
    name: "제 7회 ~~대학교 디자인과 전시회",
  },
];

const Artists = [
  {
    id: 1,
    name: "aaa",
    user_id: "aaa_id",
    password: "aaaaaa",
    university: "서울시립대학교",
    major: "디자인과",
    verified: false,
  },
  {
    id: 2,
    name: "bbb",
    university: "서울시립대학교",
    major: "디자인과",
    verified: true,
  },
  {
    id: 3,
    name: "ccc",
    university: "서울시립대학교",
    major: "디자인과",
    verified: true,
  },
  {
    id: 4,
    name: "d",
    university: "서울시립대학교",
    major: "디자인과",
    verified: true,
  },
];

const Faqs = [
  {
    id: 1,
    question: "전시회가 열리지 않아요. 어떻게 해야 할까요?",
    answer: "하단에 적힌 메일 주소로 연락주시면 기술지원을 도와드리겠습니다.",
  },
  {
    id: 2,
    question: "판매종료된 작품의 작가에게는 개별 연락이 불가능한가요?",
    answer:
      "판매가 종료되었더라도 작가에게 채팅은 가능합니다. 전시회 옆 네 번째 아이콘을 통해 채팅을 시작해보세요.",
  },
];

const Posts = [
  {
    postId: 0,
    title: "유화 레진 코팅 어떻게 하시나요?",
    content:
      "작품에 유화 물감을 사용하려하는데, 나중에 벗겨질까봐 레진 코팅하려 하거든요.",
    userName: "aaa",
    createdDate: "2024-05-06T13:14:32.658Z",
    last_modified_date: "2024-05-06T13:14:32.658Z",
  },
  {
    postId: 1,
    title: "이 작품에 어울릴 색감 찾아주세요",
    content: "가을에 잔잔한 호숫가를 그렸어요.",
    userName: "bbb",
    createdDate: "2024-05-06T13:14:32.658Z",
    last_modified_date: "2024-05-06T13:14:32.658Z",
  },
];

const Comments = [
  {
    commentId: 0,
    content: "안녕하세요. 이건 어떨까요?",
    userName: "ccc",
    createdDate: "2024-05-06T13:14:32.658Z",
  },
  {
    commentId: 1,
    content: "하이",
    userName: "ddd",
    createdDate: "2024-05-06T13:14:32.658Z",
  },
];

const Notices = [
  {
    id: 1,
    date: "04/25",
    content: "작품 이름“ OOO님의 채팅: 구매 가능할까요?",
  },
  {
    id: 2,
    date: "05/01",
    content: "OOO으로 부터 단체 전시관 초대 요청이 들어왔습니다.",
  },
];

export {
  Posts,
  Comments,
  ArtWorks,
  TestDiaries,
  GroupExhibitions,
  Artists,
  Faqs,
  Notices,
};
