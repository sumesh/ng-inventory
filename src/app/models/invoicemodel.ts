export class InvoiceNumeber {
    invoicetype: string;
    invoicepart1: string;
    invoicepart2: string;

    getInvoiceNumber() {
        return this.invoicetype + this.invoicepart1 + this.invoicepart2;
    }

}

export class CustomerDetails {
    phone: string;
    email: string;
    name: string;
    address: string;
    gst: string;
}

export class ItemModel {
    itemid: string;
    itemname: string;
    itemcode: string;
    stockqty: number;
    qty: number;
    tax: number;
    price: number;
    discount: number;
    discountper: number;
}

export class InvoiceModel {
    invoicenumber: InvoiceNumeber;
    invoicedate: Date;
    saletype: string;
    iscard: boolean;
    iscash: boolean;
    iscredit: boolean;
    salesman: string;
    iswithwarranty: boolean;
    warrantycardnum: string;
    reftype: string;
    refnum: string;
    customer: CustomerDetails;
    gst: number;
    cgst: number;
    kgst: number;
    items: Array<ItemModel>;
    discount: number;
    discountper: number;
}

