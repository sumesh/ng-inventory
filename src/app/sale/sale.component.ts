import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { InvoiceModel, CustomerDetails, InvoiceNumeber, ItemModel } from '../models/'



export const SaleData: InvoiceModel = {
  invoicenumber: <InvoiceNumeber>{
    invoicetype: 'S',
    invoicepart1: '1001',
    invoicepart2: '2017'
  },
  invoicedate: new Date(),
  saletype: 'S',
  iscard: false,
  iscash: true,
  iscredit: false,
  salesman: '',
  iswithwarranty: false,
  warrantycardnum: '',
  reftype: '-',
  refnum: '',
  customer: <CustomerDetails>
  {
    address: '',
    email: '',
    phone: '',
    gst: '',
    name: ''
  },
  gst: 3,
  cgst: 1.5,
  kgst: 1.5,
  items: [
    { itemid: '1', itemcode: 'Code 1', itemname: 'Items 1', price: 10, stockqty: 100, qty: 0, discount: 0, tax: 3, discountper: 0 },
    { itemid: '2', itemcode: 'Code 2', itemname: 'Items 2', price: 20, stockqty: 100, qty: 0, discount: 0, tax: 3, discountper: 0 },
    { itemid: '3', itemcode: 'Code 3', itemname: 'Items 3', price: 30, stockqty: 100, qty: 0, discount: 0, tax: 3, discountper: 0 },
  ],
  discount: 0,
  discountper:0
};



@Component({
  templateUrl: 'sale.component.html'
})
export class SaleComponent implements OnInit {

  sale: InvoiceModel;

  constructor() { }

  ngOnInit(): void {
    this.sale = <InvoiceModel>JSON.parse(JSON.stringify(SaleData));
  }

  // todo belongs to the invoice model

  // todo all methods belong to the invoice service
  getSubTotal(): number {
    let subTotal: number = 0;
    this.sale.items.forEach(function (item: ItemModel) {
      subTotal += (item.qty * item.price) - item.discount;
    });

    return subTotal;
  }

  // todo all methods belong to the invoice service
  getSubTax(): number {
    let subTotal: number = 0;
    this.sale.items.forEach(function (item: ItemModel) {
      subTotal += (item.qty * item.price) * item.tax / 100;
    });
    console.log('Tax');
    return subTotal;
  }


  getTax(): number {
    return this.getSubTotal() * (this.sale.gst / 100);
  }

  getGrandTotal(): number {
    return this.getSubTotal() + this.getSubTax();
  }

}
