import Link from "next/link";

const NotFound = () => {
    return (  
        <div className="text-center py-5">
            <p>Your Page is not Found</p>
            <div>
                <Link className="btn btn-dark" href={'/'}>Back to home</Link>
            </div>
        </div>
    );
}
 
export default NotFound;