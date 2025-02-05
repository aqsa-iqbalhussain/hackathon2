import React from 'react'

const Category =()=>{
    return(
        <>
      <div className="grid-cols-1 md:grid-cols-4 gap-6 mt-12 flex justify-center">
        {/* icon Categories */}
        <div>
          <h3 className="text-lg font-medium mb-4">Icons</h3>
          <ul className="space-y-2 text-sm text-gray-600  w-[184px] h-[144px]">
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
          </ul>
        </div>

        {/*shoes Categories */}
        <div>
          <h3 className="text-lg font-medium mb-4">Shoes</h3>
          <ul className="space-y-2 text-sm text-gray-600 w-[184px] h-[144px]">
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
          </ul>
        </div>

        {/* clothing Categories */}
        <div>
          <h3 className="text-lg font-medium mb-4">Clothing</h3>
          <ul className="space-y-2 text-sm text-gray-600  w-[184px] h-[144px]">
            <li>All Clothing</li>
            <li>Modest Wear</li>
            <li>Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
            </ul>
            </div>
            {/* kids categories */}

            <div>
          <h3 className="text-lg font-medium mb-4">Kid&apos;s</h3>
          <ul className="space-y-2 text-sm text-gray-600  w-[184px] h-[144px]">
            <li>Infant & Toddler Shoes</li>
            <li>Kid&apos;s Shoesr</li>
            <li>Kid&apos;s Jordan Shoes</li>
            <li>Kid&apos;s Basketball Shoes</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Category;