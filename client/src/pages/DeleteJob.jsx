import { redirect } from "express/lib/response"
import customFetch from "../utils/customFetch"
import { toast } from "react-toastify"

export const action = async({params}) =>{
  try {
    await customFetch.delete(`jobs/${params.id}`)
    toast.success('Job deleted successfully')
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect('/dashboard/all-jobs')
}


