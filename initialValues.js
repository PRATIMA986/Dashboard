import User from "../components/User";

export function initial(value) {
    const initialFunction = (value) => {
        switch (value) {
            case 'village':
                {
                    const village =
                    {
                        division : "",
                        district : "",
                        village : "",
                        description : ""
                    }
                    return village;
                }
            case 'product':
                {
                    const product =
                    {
                        productId : "",
                        productName : ""
                    }
                    return product;
                }
                case 'post':
                    {
                        const post =
                        {
                            title : "",
                            body : "",
                            userId : ""
                        }
                        return post;
                    }
                    case 'user':
                        {
                            const user =
                            {
                                title : "",
                                body : "",
                                userId : ""
                            }
                            return user;
                        }
            default:
                return
        }
    }
    return initialFunction(value)
}