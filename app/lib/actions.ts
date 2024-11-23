'use server'

import {sql} from "@vercel/postgres";
import {z} from 'zod';
import {expirePath} from "next/cache";
import {redirect} from "next/navigation";
const dataSchema = z.object({
    id : z.string(),
    customerId : z.string(),
    amount : z.coerce.number(),
    status : z.enum(['pending' , 'paid']),
    date : z.date()
});
const CheckInvoice = dataSchema.omit({id : true, date : true});
export async function createInvoice(formData : FormData) {

    const {customerId, amount, status} = CheckInvoice.parse({
        customerId : formData.get("customerId"),
        amount : formData.get("amount"),
        status : formData.get("status"),
    });
    const amountInCents = amount * 100;
    const currentDate = new Date().toISOString().split('T')[0];
    try {
        await sql`insert into invoices (customer_id, amount, status, date)
                    values (${customerId}, ${amountInCents}, ${status}, ${currentDate}) `;
    } catch (error) {
        console.log("failed to insert invoice", error);
    }
    expirePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}
export async function updateInvoice(id :string ,formData : FormData) {
    const {customerId, amount, status} = CheckInvoice.parse({
        customerId : formData.get("customerId"),
        amount : formData.get("amount"),
        status : formData.get("status"),
        });
    const amountInCents = amount * 100;
    const currentDate = new Date().toISOString().split('T')[0];
    try {
        await sql`update invoices
                  set customer_id=${customerId},
                      amount=${amountInCents},
                      status     = ${status},
                      date=${currentDate}
                  where id = ${id}`;
    } catch (error) {
        console.log("failed to update invoice", error);
    }
    expirePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}
export async function deleteInvoice(id :string) {
    try {
        await sql`delete
                  from invoices
                  where id = ${id}`;
    } catch (error) {
        console.log("failed to delete invoice", error);
    }
    expirePath('/dashboard/invoices');
}