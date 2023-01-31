import React, { FC } from "react";
import { AnnouncementsResponse } from "@/types";
import { format } from "date-fns";
import Link from "next/link";

interface Props {
  data: AnnouncementsResponse<unknown>[] | undefined;
  error: any;
}
const ArticlesTableItem: FC<Props> = ({ data, error }) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full table-fixed divide-y divide-gray-200">
              <thead className="bg-primary-500">
                <tr>
                  <th
                    scope="col"
                    className="w-5 truncate px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white"
                  >
                    Author
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data &&
                  !error &&
                  data.map((announcement) => (
                    <tr key={announcement.title}>
                      <td className="truncate whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {announcement.title}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {format(new Date(announcement.created), "LLL Mo, yyyy")}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {/* @ts-ignore */}
                        {announcement && announcement.expand?.user!.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                        <Link
                          href={`/articles/edit/${announcement.id}`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesTableItem;
