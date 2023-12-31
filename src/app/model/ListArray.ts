export interface Board {
  id : number ;
  boardtitle : string ;
  arrayColumn : Column[];
}

export interface Column {
  columnTitle: string;
  array: ListItem[];
}

export interface ListItem {
  title: string;
  description?: string;
  editingTitle? : string;
  isEditing? : boolean;
}
/*  */
