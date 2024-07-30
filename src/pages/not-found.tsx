import { NextPage } from 'next';
interface Props {
    statusCode?: number
}

const Custom404: NextPage<Props> = () => {
    return (
        <div>404</div>
    );
}


export default Custom404
