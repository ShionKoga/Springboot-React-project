import App, {AppProps} from "./App";

export default function AppNavigation(props: { appProps: AppProps }) {
    return (
        <App {...props.appProps}/>
    )
}