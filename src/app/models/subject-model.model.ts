    export class SubjectModel {
        constructor(public name: string, public checked: boolean = false) {}

        toggleChecked(): void {
            this.checked = !this.checked;
          }
    }
    