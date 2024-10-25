import React from 'react'
interface Icon5Props {
    className?: string; // Make it optional
  }
  const Icon2: React.FC<Icon5Props> = ({ className }) => {
    return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg"  width="100" zoomAndPan="magnify" viewBox="0 0 1500 1499.999933" height="100" className={className}preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="17f39cb79a"><path d="M 125.34375 1334 L 1374.84375 1334 L 1374.84375 1374.84375 L 125.34375 1374.84375 Z M 125.34375 1334 " clip-rule="nonzero"/></clipPath><clipPath id="274a0d8090"><path d="M 568 125.34375 L 1262 125.34375 L 1262 476 L 568 476 Z M 568 125.34375 " clip-rule="nonzero"/></clipPath><clipPath id="91b67b831d"><path d="M 125.34375 238 L 476 238 L 476 932 L 125.34375 932 Z M 125.34375 238 " clip-rule="nonzero"/></clipPath><clipPath id="09b0009d09"><path d="M 1024 508 L 1374.84375 508 L 1374.84375 1201 L 1024 1201 Z M 1024 508 " clip-rule="nonzero"/></clipPath><clipPath id="7713dca0b7"><path d="M 125.34375 488 L 1374.84375 488 L 1374.84375 1254 L 125.34375 1254 Z M 125.34375 488 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#17f39cb79a)"><path fill="#388e3c" d="M 125.34375 1374.65625 L 1374.65625 1374.65625 L 1374.65625 1334.355469 L 125.34375 1334.355469 L 125.34375 1374.65625 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#274a0d8090)"><path fill="#388e3c" d="M 608.945312 182.800781 C 654.914062 171.386719 702.300781 165.644531 750 165.644531 C 900.808594 165.644531 1044.066406 223.023438 1153.238281 327.238281 L 1167.484375 340.855469 L 1182.363281 325.976562 L 1205.898438 420.039062 L 1111.835938 396.503906 L 1139.070312 369.191406 L 1124.117188 355.023438 C 1022.65625 258.917969 889.789062 205.941406 750 205.941406 C 702.140625 205.941406 654.757812 212.160156 608.945312 224.363281 Z M 614.378906 264.660156 C 658.300781 252.460938 703.953125 246.242188 750 246.242188 C 872.550781 246.242188 989.28125 290.164062 1081.058594 370.292969 L 1032.96875 418.386719 L 1261.308594 475.453125 L 1204.242188 247.109375 L 1166.621094 284.734375 C 1051.777344 181.777344 904.667969 125.34375 750 125.34375 C 693.484375 125.34375 637.441406 132.898438 583.445312 147.773438 L 568.648438 151.867188 L 568.648438 267.339844 L 609.890625 265.449219 L 614.378906 264.660156 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#91b67b831d)"><path fill="#388e3c" d="M 327.238281 346.757812 L 340.855469 332.511719 L 325.976562 317.636719 L 420.039062 294.101562 L 396.503906 388.160156 L 369.191406 360.847656 L 355.023438 375.882812 C 258.835938 477.339844 205.941406 610.207031 205.941406 750 C 205.941406 797.855469 212.160156 845.238281 224.441406 891.050781 L 182.800781 891.050781 C 171.386719 845.082031 165.644531 797.699219 165.644531 750 C 165.644531 599.1875 223.023438 455.929688 327.238281 346.757812 Z M 147.773438 916.550781 L 151.867188 931.351562 L 267.339844 931.351562 L 265.449219 890.105469 L 264.742188 885.617188 C 252.460938 841.699219 246.242188 796.042969 246.242188 750 C 246.242188 627.523438 290.164062 510.714844 370.292969 418.9375 L 418.386719 467.03125 L 475.453125 238.6875 L 247.109375 295.753906 L 284.734375 333.378906 C 181.777344 448.21875 125.34375 595.328125 125.34375 750 C 125.34375 806.511719 132.898438 862.554688 147.773438 916.550781 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#09b0009d09)"><path fill="#388e3c" d="M 1317.195312 548.496094 C 1328.609375 594.464844 1334.355469 641.847656 1334.355469 689.546875 C 1334.355469 840.359375 1276.972656 983.613281 1172.757812 1092.789062 L 1159.140625 1107.035156 L 1174.019531 1121.910156 L 1079.957031 1145.445312 L 1103.492188 1051.386719 L 1130.804688 1078.699219 L 1144.972656 1063.664062 C 1241.082031 962.207031 1294.054688 829.339844 1294.054688 689.546875 C 1294.054688 641.691406 1287.835938 594.308594 1275.636719 548.496094 Z M 1234.546875 549.441406 L 1235.335938 553.925781 C 1247.535156 597.847656 1253.753906 643.5 1253.753906 689.546875 C 1253.753906 812.023438 1209.832031 928.832031 1129.703125 1020.609375 L 1081.609375 972.515625 L 1024.546875 1200.859375 L 1252.886719 1143.792969 L 1215.261719 1106.167969 C 1318.21875 991.328125 1374.65625 844.214844 1374.65625 689.546875 C 1374.65625 633.03125 1367.097656 576.988281 1352.222656 522.992188 L 1348.128906 508.195312 L 1232.660156 508.195312 L 1234.546875 549.441406 " fill-opacity="1" fill-rule="nonzero"/></g><path fill="#388e3c" d="M 548.496094 891.050781 L 548.496094 931.351562 L 588.796875 931.351562 L 588.796875 891.050781 L 548.496094 891.050781 " fill-opacity="1" fill-rule="nonzero"/><path fill="#388e3c" d="M 387.292969 931.351562 L 427.59375 931.351562 L 427.59375 891.050781 L 387.292969 891.050781 L 387.292969 931.351562 " fill-opacity="1" fill-rule="nonzero"/><path fill="#388e3c" d="M 467.894531 931.351562 L 508.195312 931.351562 L 508.195312 891.050781 L 467.894531 891.050781 L 467.894531 931.351562 " fill-opacity="1" fill-rule="nonzero"/><path fill="#388e3c" d="M 467.894531 1011.949219 L 508.195312 1011.949219 L 508.195312 971.652344 L 467.894531 971.652344 L 467.894531 1011.949219 " fill-opacity="1" fill-rule="nonzero"/><path fill="#388e3c" d="M 387.292969 1011.949219 L 427.59375 1011.949219 L 427.59375 971.652344 L 387.292969 971.652344 L 387.292969 1011.949219 " fill-opacity="1" fill-rule="nonzero"/><path fill="#388e3c" d="M 548.496094 1011.949219 L 588.796875 1011.949219 L 588.796875 971.652344 L 548.496094 971.652344 L 548.496094 1011.949219 " fill-opacity="1" fill-rule="nonzero"/><path fill="#388e3c" d="M 467.894531 1092.550781 L 508.195312 1092.550781 L 508.195312 1052.25 L 467.894531 1052.25 L 467.894531 1092.550781 " fill-opacity="1" fill-rule="nonzero"/><path fill="#388e3c" d="M 548.496094 1092.550781 L 588.796875 1092.550781 L 588.796875 1052.25 L 548.496094 1052.25 L 548.496094 1092.550781 " fill-opacity="1" fill-rule="nonzero"/><path fill="#388e3c" d="M 387.292969 1092.550781 L 427.59375 1092.550781 L 427.59375 1052.25 L 387.292969 1052.25 L 387.292969 1092.550781 " fill-opacity="1" fill-rule="nonzero"/><path fill="#388e3c" d="M 387.292969 1173.152344 L 427.59375 1173.152344 L 427.59375 1132.851562 L 387.292969 1132.851562 L 387.292969 1173.152344 " fill-opacity="1" fill-rule="nonzero"/><path fill="#388e3c" d="M 548.496094 1173.152344 L 588.796875 1173.152344 L 588.796875 1132.851562 L 548.496094 1132.851562 L 548.496094 1173.152344 " fill-opacity="1" fill-rule="nonzero"/><path fill="#388e3c" d="M 467.894531 1173.152344 L 508.195312 1173.152344 L 508.195312 1132.851562 L 467.894531 1132.851562 L 467.894531 1173.152344 " fill-opacity="1" fill-rule="nonzero"/><path fill="#388e3c" d="M 427.59375 770.148438 L 467.894531 770.148438 L 467.894531 729.847656 L 427.59375 729.847656 L 427.59375 770.148438 " fill-opacity="1" fill-rule="nonzero"/><path fill="#388e3c" d="M 588.796875 770.148438 L 629.097656 770.148438 L 629.097656 729.847656 L 588.796875 729.847656 L 588.796875 770.148438 " fill-opacity="1" fill-rule="nonzero"/><path fill="#388e3c" d="M 508.195312 770.148438 L 548.496094 770.148438 L 548.496094 729.847656 L 508.195312 729.847656 L 508.195312 770.148438 " fill-opacity="1" fill-rule="nonzero"/><path fill="#388e3c" d="M 709.699219 729.847656 L 669.398438 729.847656 L 669.398438 770.148438 L 709.699219 770.148438 L 709.699219 729.847656 " fill-opacity="1" fill-rule="nonzero"/><path fill="#388e3c" d="M 588.796875 689.546875 L 629.097656 689.546875 L 629.097656 649.246094 L 588.796875 649.246094 L 588.796875 689.546875 " fill-opacity="1" fill-rule="nonzero"/><path fill="#388e3c" d="M 709.699219 649.246094 L 669.398438 649.246094 L 669.398438 689.546875 L 709.699219 689.546875 L 709.699219 649.246094 " fill-opacity="1" fill-rule="nonzero"/><path fill="#388e3c" d="M 508.195312 689.546875 L 548.496094 689.546875 L 548.496094 649.246094 L 508.195312 649.246094 L 508.195312 689.546875 " fill-opacity="1" fill-rule="nonzero"/><path fill="#388e3c" d="M 427.59375 689.546875 L 467.894531 689.546875 L 467.894531 649.246094 L 427.59375 649.246094 L 427.59375 689.546875 " fill-opacity="1" fill-rule="nonzero"/><path fill="#388e3c" d="M 427.59375 608.945312 L 467.894531 608.945312 L 467.894531 568.648438 L 427.59375 568.648438 L 427.59375 608.945312 " fill-opacity="1" fill-rule="nonzero"/><path fill="#388e3c" d="M 588.796875 608.945312 L 629.097656 608.945312 L 629.097656 568.648438 L 588.796875 568.648438 L 588.796875 608.945312 " fill-opacity="1" fill-rule="nonzero"/><path fill="#388e3c" d="M 508.195312 608.945312 L 548.496094 608.945312 L 548.496094 568.648438 L 508.195312 568.648438 L 508.195312 608.945312 " fill-opacity="1" fill-rule="nonzero"/><path fill="#388e3c" d="M 709.699219 568.648438 L 669.398438 568.648438 L 669.398438 608.945312 L 709.699219 608.945312 L 709.699219 568.648438 " fill-opacity="1" fill-rule="nonzero"/><g clip-path="url(#7713dca0b7)"><path fill="#388e3c" d="M 346.996094 850.75 L 629.097656 850.75 L 629.097656 1213.453125 L 346.996094 1213.453125 Z M 387.292969 528.347656 L 750 528.347656 L 750 1213.453125 L 669.398438 1213.453125 L 669.398438 810.449219 L 387.292969 810.449219 Z M 891.050781 689.546875 L 951.5 689.546875 L 951.5 772.351562 C 925.839844 746.140625 890.183594 729.847656 850.75 729.847656 L 790.300781 729.847656 L 790.300781 647.042969 C 815.957031 673.253906 851.617188 689.546875 891.050781 689.546875 Z M 850.75 568.648438 C 899.394531 568.648438 940.085938 603.28125 949.453125 649.246094 L 891.050781 649.246094 C 842.40625 649.246094 801.710938 614.613281 792.34375 568.648438 Z M 792.34375 770.148438 L 850.75 770.148438 C 899.394531 770.148438 940.085938 804.78125 949.453125 850.75 L 891.050781 850.75 C 842.40625 850.75 801.710938 816.117188 792.34375 770.148438 Z M 951.5 1213.453125 L 790.300781 1213.453125 L 790.300781 848.546875 C 815.957031 874.757812 851.617188 891.050781 891.050781 891.050781 L 951.5 891.050781 Z M 1092.550781 649.246094 L 1150.957031 649.246094 C 1141.589844 695.214844 1100.894531 729.847656 1052.25 729.847656 L 993.847656 729.847656 C 1003.214844 683.878906 1043.90625 649.246094 1092.550781 649.246094 Z M 1092.550781 850.75 L 1150.957031 850.75 C 1141.589844 896.71875 1100.894531 931.351562 1052.25 931.351562 L 993.847656 931.351562 C 1003.214844 885.382812 1043.90625 850.75 1092.550781 850.75 Z M 991.800781 971.652344 L 1052.25 971.652344 C 1130.019531 971.652344 1193.304688 908.367188 1193.304688 830.597656 L 1193.304688 810.449219 L 1092.550781 810.449219 C 1053.117188 810.449219 1017.460938 826.742188 991.800781 852.953125 L 991.800781 770.148438 L 1052.25 770.148438 C 1130.019531 770.148438 1193.304688 706.863281 1193.304688 629.097656 L 1193.304688 608.945312 L 1092.550781 608.945312 C 1052.566406 608.945312 1016.4375 625.792969 990.699219 652.632812 C 982.355469 582.816406 922.847656 528.347656 850.75 528.347656 L 790.300781 528.347656 L 790.300781 488.046875 L 346.996094 488.046875 L 346.996094 810.449219 L 306.695312 810.449219 L 306.695312 1213.453125 L 125.34375 1213.453125 L 125.34375 1253.753906 L 1374.65625 1253.753906 L 1374.65625 1213.453125 L 991.800781 1213.453125 L 991.800781 971.652344 " fill-opacity="1" fill-rule="nonzero"/></g></svg>
    </div>
  )
}

export default Icon2