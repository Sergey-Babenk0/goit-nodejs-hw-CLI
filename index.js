const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;
    case "get":
      const oneContact = await contacts.getContactById(id);
      console.log(oneContact);
      break;
    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);
      break;
    case "remove":
      const deleteContact = await contacts.removeContact(id);
      console.log(deleteContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);

// invokeAction({ action: "listContacts" });
// invokeAction({ action: "getContactById", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({
//   action: "addContact",
//   name: "Sergey Babenko",
//   email: "serg_babenko@i.ua",
//   phone: "7775575",
// });
// invokeAction({ action: "removeContact", id: "F1q5WhkuMVeL2d_uWEhI4" });
