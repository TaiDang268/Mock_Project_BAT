export interface INews {
  id?: string
  image?: string
  author?: string
  category?: string
  date?: string
  title?: string
  description?: string
}
export interface IJob {
  id?: string
  name?: string
  description?: string
  salary?: string
  address?: string
  deadline?: string
  type_of_work?: string
  work_group?: string
}
export interface IWorkGroup {
  id: string
  name: string
}
export interface IAddress {
  id: string
  name: string
}
export interface ITypeOfWork {
  id: string
  name: string
}
