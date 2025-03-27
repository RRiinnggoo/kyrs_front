import { Services } from "../services/Services";

export const AdminServices = () => {
    const isAdmin = true;
    return <Services isAdmin={true} />;
};

export default AdminServices;