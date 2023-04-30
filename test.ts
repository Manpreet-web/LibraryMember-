interface LibraryItem {
    id: number;
    title: string;
    author: string;
    copiesAvailable: number;
    borrowCopy(): void;
    returnCopy(): void;
  }
  
  class Book implements LibraryItem {
    constructor(
      public id: number,
      public title: string,
      public author: string,
      public copiesAvailable: number
    ) {}
  
    borrowCopy() {
      if (this.copiesAvailable > 0) {
        this.copiesAvailable--;
      } else {
        console.log(`No copies of ${this.title} are available for borrowing.`);
      }
    }
  
    returnCopy() {
      this.copiesAvailable++;
    }
  
    displayInfo() {
      return `${this.title} by ${this.author} (ID: ${this.id}), ${this.copiesAvailable} copies available.`;
    }
  }
  
  class DVD implements LibraryItem {
    constructor(
      public id: number,
      public title: string,
      public director: string,
      public copiesAvailable: number
    ) {}
  
    borrowCopy() {
      if (this.copiesAvailable > 0) {
        this.copiesAvailable--;
      } else {
        console.log(`No copies of ${this.title} are available for borrowing.`);
      }
    }
  
    returnCopy() {
      this.copiesAvailable++;
    }
  
    displayInfo() {
      return `${this.title} directed by ${this.director} (ID: ${this.id}), ${this.copiesAvailable} copies available.`;
    }
  }
  
  class LibraryMember {
    borrowedItems: LibraryItem[] = [];
  
    constructor(public id: number, public name: string) {}
  
    borrowItem(item: LibraryItem) {
      if (item.copiesAvailable > 0) {
        item.borrowCopy();
        this.borrowedItems.push(item);
        console.log(`${this.name} has borrowed ${item.title}.`);
      } else {
        console.log(`No copies of ${item.title} are available for borrowing.`);
      }
    }
  
    returnItem(item: LibraryItem) {
      const index = this.borrowedItems.findIndex((i) => i.id === item.id);
      if (index !== -1) {
        item.returnCopy();
        this.borrowedItems.splice(index, 1);
        console.log(`${this.name} has returned ${item.title}.`);
      } else {
        console.log(`${this.name} has not borrowed ${item.title}.`);
      }
    }
  }
  

  