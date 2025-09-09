import {createRoot} from "react-dom/client";
import {AppRouter} from "@app/router";

const root = document.getElementById("root")
const container = createRoot(root)
container.render(
    <AppRouter/>
)