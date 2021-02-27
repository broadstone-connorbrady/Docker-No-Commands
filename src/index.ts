import {
  QMainWindow,
  QWidget,
  QLabel,
  FlexLayout,
  QPushButton,
  QIcon,
  QGridLayout,
  QListView,
  QListWidget
} from '@nodegui/nodegui';
import logo from '../assets/logox200.png';
import {root} from "postcss";

const rootView = new QWidget();
rootView.setLayout(new QGridLayout());
rootView.setObjectName("rootView");

// ORANGE
const statsView = new QWidget();

const statsListView =

// statsList.addItem()
statsView.layout?.addWidget(new QListView())
statsView.setObjectName("statsView");

// BLUE
const imagesView = new QWidget();
imagesView.setObjectName("imagesView");

// TEAL
const containersView = new QWidget();
containersView.setObjectName("containersView");

// PINK
const volumesView = new QWidget();
volumesView.setObjectName("volumesView");

const networksView = new QWidget();
networksView.setObjectName("networksView");

rootView.layout?.addWidget(statsView, 0, 0, -1, 1);
rootView.layout?.addWidget(containersView, 0, 1, 1 ,1);
rootView.layout?.addWidget(imagesView, 0, 2, 1 ,1);

rootView.layout?.addWidget(volumesView, 1, 1, 1, 1);
rootView.layout?.addWidget(networksView, 1, 2, 1, 1);

const win = new QMainWindow();
win.setWindowTitle("Docker No Commands");
win.setCentralWidget(rootView);




win.setStyleSheet(
  `
    #myroot {
      background-color: #009688;
      height: '100%';
      align-items: 'center';
      justify-content: 'center';
    }
    #mylabel {
      font-size: 16px;
      font-weight: bold;
      padding: 1;
    }
    #imagesView {
      background-color: #33BAFF; 
    }
    #containersView {
      background-color: #33FFA8; 
    }
   #statsView {
      background-color: #FFCA33; 
    }
   #volumesView {
      background-color: #FD33FF; 
    }
   #networksView {
      background-color: #333BFF;
    }
  `
);
win.show();

(global as any).win = win;
