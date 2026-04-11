import { supabase } from "@/lib/supabaseClient";

export const getProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) {
    console.log("Error perfil:", error.message);
    return null;
  }

  return data;
};