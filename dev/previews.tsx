import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox-next";
import {PaletteTree} from "./palette";
import Form from "@/app/ui/invoices/create-form";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Form">
                <Form/>
            </ComponentPreview>
            <ComponentPreview path="/ComponentPreviews">
                <ComponentPreviews/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;