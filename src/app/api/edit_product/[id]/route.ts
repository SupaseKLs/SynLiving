import { connectMongoDB } from "@/libs/MongoConnect";
import Product from "@/libs/models/Product";
import { NextResponse } from "next/server";

export async function PUT(request: NextResponse, URLParams: any) {
    try {

        const body = await request.json();
        const id = URLParams.params.id;
        const { name, category, price } = body;

        await connectMongoDB();

        const data = await Product.findByIdAndUpdate(id, {
            name, category, price
        });

        return NextResponse.json({msg: "Updated Successfully", data});
    } catch(error) {
        return NextResponse.json(
            {
                error,
                msg: "Something went Wrong",
            },
            { status: 400 }
        )
    }
}