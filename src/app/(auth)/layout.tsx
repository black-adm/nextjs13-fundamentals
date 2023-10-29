import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <h1 className="text-2xl font-bold">Logo</h1>
            <div>{children}</div>
        </div>
    )
}