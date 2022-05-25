export interface PostProps {
  id: number
  title: string
  content: string
  image?: string
  createAt: string
  columnId: number
}
export interface ColumnProps {
  id: number
  title: string
  avator?: string
  description: string
}
export const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1',
    description: '这是第一个测试',
    avator: '/images/hutao.gif'
  },
  {
    id: 2,
    title: 'test2',
    description: '这是第二个测试',
    avator: '/images/hutao.gif'
  },
  {
    id: 3,
    title: 'test3',
    description: '这是第三个测试',
    avator: '/images/hutao.gif'
  },
  {
    id: 4,
    title: 'test4',
    description: '这是第四个测试',
    avator: '/images/hutao.gif'
  },
  {
    id: 5,
    title: 'test4',
    description: '这是第四个测试',
    avator: '/images/hutao.gif'
  },
  {
    id: 6,
    title: 'test4',
    description: '这是第四个测试',
    avator: '/images/hutao.gif'
  }
]
export const testPosts: PostProps[] = [
  {
    id: 1,
    title: '测试文章',
    content:
      '测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
    image: '/images/hutao.gif',
    createAt: '2022-5-24 14:52',
    columnId: 1
  },
  {
    id: 1,
    title: '测试文章',
    content:
      '测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
    createAt: '2022-5-24 14:52',
    columnId: 1
  },
  {
    id: 2,
    title: '测试文章',
    content: '测试内容',
    image: '/images/hutao.gif',
    createAt: '2022-5-24 14:52',
    columnId: 2
  },
  {
    id: 3,
    title: '测试文章',
    content: '测试内容',
    image: '/images/hutao.gif',
    createAt: '2022-5-24 14:52',
    columnId: 3
  },
  {
    id: 4,
    title: '测试文章',
    content: '测试内容',
    image: '/images/hutao.gif',
    createAt: '2022-5-24 14:52',
    columnId: 4
  }
]
