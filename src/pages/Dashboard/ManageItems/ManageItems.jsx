import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

import Swal from 'sweetalert2';
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    return (
        <div className="w-full">
  <SectionTitle heading="Manage All Items" subHeading="Hurry up"></SectionTitle>
  <div className="overflow-x-auto w-full">
    <div className="inline-block min-w-full">
      <table className="min-w-full">
        {/* head */}
        <thead>
          <tr>
            <th className="py-2">#</th>
            <th className="py-2">Item</th>
            <th className="py-2">Category</th>
            <th className="py-2">Price</th>
            <th className="py-2">Update</th>
            <th className="py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((item, index) => (
            <tr key={item._id}>
              <td className="py-2">{index + 1}</td>
              <td className="py-2">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12">
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src={item.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-xs">{item.name}</div>
                  </div>
                </div>
              </td>
              <td className="py-2">{item.category}</td>
              <td className="py-2 text-right">${item.price}</td>
              <td className="py-2">
                <button className="btn btn-ghost btn-xs">details</button>
              </td>
              <td className="py-2">
                <button
                  onClick={() => handleDelete(item)}
                  className="btn btn-ghost bg-red-600 text-white"
                >
                  <FaTrashAlt></FaTrashAlt>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

    );
};

export default ManageItems;