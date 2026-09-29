"use client"

import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const [isDialogOpen, setIsDialogOpen] = useState(false); 
    const router = useRouter();

    async function handleLogout (){
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error(error);
            return;
        }

        router.push("/admin");
    }

    return(
        <div>
            <button onClick={() => setIsDialogOpen(true)}>
                Logout
            </button>
            { isDialogOpen && (
                <div>
                    Dialog Test

                    <button onClick={() => setIsDialogOpen(false)}>
                        Cancel
                    </button>

                    <button onClick={handleLogout}>
                        Confirm
                    </button>

                </div>
            )}
        </div>
    );
}