import { supabase } from "./supabase"

export async function logEvent(event: string, page?: string) {
  try {
    const {
      data: { user }
    } = await supabase.auth.getUser()

    await supabase.from("events").insert({
      user_id: user?.id || null,
      event,
      page: page || window.location.pathname
    })
  } catch (err) {
    console.error("Analytics error:", err)
  }
}
