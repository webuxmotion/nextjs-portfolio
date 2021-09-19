import { useRouter } from 'next/router';

const PortfolioDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    
    return (
        <h1>I am Detail page with ID: {id}</h1>
    )
}

export default PortfolioDetail;