import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import Image from "next/image"

export function DropdownMenuMobile() {
    return(
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Menu size={28} />
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" align="end" className="mt-3 bg-zinc-950 border-zinc-800">
                    <DropdownMenuItem className="text-zinc-200">
                        <Image src="https://github.com/iPaulinh0.png" alt="profile picture" className="h-6 w-6 rounded-full" width={24} height={24}/>
                        Profile
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
    )
}