export type Budget = {
  id: string;
  date: Date;
  value: number;
  createdAt: Date;
  updatedAt: Date;
};

// class Budget {
//     constructor(id: string, private date: Date, private value: number, private createdAt: Date, private updatedAt: Date){}

//     getId(){
//         return this.id
//     }

//     getDate(){
//         return this.date
//     }

//     getValue(){
//         return this.value
//     }

//     getCreatedAt(){
//         return this.createdAt
//     }

//     getUpdatedAt(){
//         return this.updatedAt
//     }
// }

// export { Budget }
