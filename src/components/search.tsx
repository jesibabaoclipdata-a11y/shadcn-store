import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState } from "react";


interface InputInlineProps {
    onSearch: (value: string) => void;
}
export function InputInline({
    onSearch, }: InputInlineProps) {
    const [value, setValue] = useState("")

    const handleChange = (val: string) => {
        setValue(val)
        onSearch(val)
    }
    return (
        <Field orientation="horizontal">
            <Input
                onChange={(e) => handleChange(e.target.value)}

                type="search" placeholder="Search..." />
            <Button onClick={() => onSearch(value)}>Search</Button>
        </Field>
    )
}
