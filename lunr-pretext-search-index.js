var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "    copyright  "
},
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Dedication",
  "number": "",
  "title": "Dedication",
  "body": " To my spouse, who supported me through countless late nights and early mornings, and never once complained.  "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " I would like to thank my colleagues and students for the contributions they have made to improve this book through questionnaires, classroom discussion, and their invaluable feedback and support throughout the writing process. I am especially very grateful to John Gould, Keith Stafford, and Daniel Covington for providing their critical suggestions to organize this book. Without their guidance, this book would not be what it is today. Their knowledge and expertise were instrumental in shaping my journey in writing this book. Finally, I want to express my gratitude to my family for their unwavering encouragement and patience during the many long hours I spent at my desk. Their love and support sustained me through the ups and downs of this project. Several people deserve credit for their generous help with this book.  "
},
{
  "id": "meta_frontmatter-preface",
  "level": "1",
  "url": "meta_frontmatter-preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Mathematical Physics is a branch of physics which provides the logical relationship between physical theories and mathematical equations. It is based on the concept that everything in nature follows mathematical rules and regulations. Many discoveries such as the existance of positrons, the Higgs Boson, the concept that the gravity is a result of warping of spacetime due to presence of mass, and spacetime obeyes fluid dynamics were possible because of mathematical equations. This book attempts to provide preliminary mathematical concepts to understand physical theories. This book has been written to introduce basic mathematical tools that are useful in undergraduate physics courses and is a concise form of my lecture notes which I have been delivering in bachelors level classes for many years. It attempts to bridge physical theories to mathematical equations. This book is organized into seven chapters that cover the syllabus of mathematical physics at undergraduate level in variuos universities. The book consists of the basics of vectors, vector space, matrix, tensors, Fourier series, integral transforms, and the ordinary & partial differential equations. The main objective of this book is to guide students or readers to understand mathematical equations to learn physics. Many examples and practice problems throughout the text may be helpful to refine physical intution.  Comments and suggestions for improvements to the text will be gratefully appreciated.  "
},
{
  "id": "subsec_addvec-subsection",
  "level": "1",
  "url": "subsec_addvec-subsection.html",
  "type": "Subsection",
  "number": "1.1.1",
  "title": "Addition of Vectors",
  "body": " Addition of Vectors   A vector whose effect is same as that of a set of two vectors is called the sum or the resultant of the given vectors. Let and as shown in , then the vector is called the sum of and . i.e.,    Properties   Vectors Addition                    Commutative law:  Let and be the adjacent sides of a parallelogram of diagonal vector as shown in , then  from and , we have -    Associative law:  Let , , and as shown in , then  from and , we have -        Subtraction of Vectors  The subtraction of a vector from is the addition of a negative vector of (i.e., ) to , i.e.,     Scalar Multiplication of a Vector  Let a vector is multiplied by any real positive number , then the product is a vector whose magnitude is times as that of and its direction is the same as . If is a negative number then the direction of is opposite to .  If is a unit vector in the direction of then, we have  where is a magnitude of . where and are scalars.       Components of a Vector  Any vector in a space can be resolved into three rectangular components. Let the position vector of a point be , the diagonal vector of a parallelopiped and , , and are the unit vectors along and axes, respectively so that , , and , the rectangular components of .      Components of a vector                 The magnitude of is given by   Now, If makes angles , , and with , and axes, respectively, as shown in , then The quantities , , and are called direction cosines of . Obviously,  .   "
},
{
  "id": "subsec_addvec-subsection-2-2-2",
  "level": "2",
  "url": "subsec_addvec-subsection.html#subsec_addvec-subsection-2-2-2",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " Vectors Addition                "
},
{
  "id": "subsec_addvec-subsection-2-2-3",
  "level": "2",
  "url": "subsec_addvec-subsection.html#subsec_addvec-subsection-2-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Commutative law: Associative law: "
},
{
  "id": "subsubsec_compntvec-4",
  "level": "2",
  "url": "subsec_addvec-subsection.html#subsubsec_compntvec-4",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " Components of a vector                "
},
{
  "id": "subsec-dbetpnts",
  "level": "1",
  "url": "subsec-dbetpnts.html",
  "type": "Subsection",
  "number": "1.1.2",
  "title": "Distance between two points",
  "body": " Distance between two points  Let and are the position vectors of two points A and B, as shown in , whose coordinates are given as and respectively then and . From ,     "
},
{
  "id": "subsec-lineseg",
  "level": "1",
  "url": "subsec-lineseg.html",
  "type": "Subsection",
  "number": "1.1.3",
  "title": "Dividing the line segments",
  "body": " Dividing the line segments  Let the point P divides the line AB in the ratio of . If  and be the position vectors of points A and B, respectively then the position vector of point P is determined as and . Since point P divides the line AB in the ratio of , as shown in , we have    If P be the mid - point of line AB, then and .     "
},
{
  "id": "cor-midlineseg",
  "level": "2",
  "url": "subsec-lineseg.html#cor-midlineseg",
  "type": "Corollary",
  "number": "1.1.3",
  "title": "",
  "body": "  If P be the mid - point of line AB, then and .   "
},
{
  "id": "subsec-lincombvects",
  "level": "1",
  "url": "subsec-lincombvects.html",
  "type": "Subsection",
  "number": "1.1.4",
  "title": "Linear Combination of Vectors",
  "body": " Linear Combination of Vectors  Let be the vectors of the same order, then a new vector is said to be the linear combination of these vectors if there exists scalars , such that A set of n vectors is said to be linearly dependent, if there exists scalars , not all zero (i.e. at least one k's is non - zero), such that   where is a null vector. In equation , if all the k's are zero, then the vectors are linearly independent. For linearly dependent vectors, suppose be one of the non - zero scalar, then    = linear combination of (n-1) vectors    Basic Vectors    Thus vectors are linearly dependent, if any one of them can be expressed as a linear combination of the remaining (n-1) vectors. The vectors of equation form a base or basis for all the vectors in - space. Hence these vectors are called the Basis Vectors , basis vectors i.e., any vectors lying in the given space can be expressed in terms of these basis vectors basis vectors . For example, suppose , , and are any three non-zero and non-parallel vectors, and there exists the scalars , , and such that , then is a linear combination of vectors , , and in three dimensional space. Where , , and are components of a and , , and form the basis vectors. In space (or plane) it is advantageous to choose the basis for the vectors as perpendicular vector each of unit length. These vectors are denoted by , , and and their common foot by . The lines determined by , , and are the , and axes, respectively. Any vector in a space with foot at O, as shown in , can be expressed as a linear combination of the basis vectors , , and , such that . linear combination of vectors .   Basis Vectors are a set of linearly independent vectors that span a vector space. A vector space can have many different bases, but any two bases of the same vector space have the same number of vectors, which is known as the dimension of the vector space. For example, in two-dimensional space, the standard basis vectors are (1, 0) and (0, 1), which are perpendicular to each other and span the entire space. Any vector in the plane can be written as a linear combination of these two vectors. Similarly, in three-dimensional space, the standard basis vectors are (1, 0, 0), (0, 1, 0), and (0, 0, 1), which are mutually orthogonal and span the entire space. Any vector in three-dimensional space can be expressed as a linear combination of these three vectors.  "
},
{
  "id": "fig-bvec",
  "level": "2",
  "url": "subsec-lincombvects.html#fig-bvec",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": " Basic Vectors   "
},
{
  "id": "subsec-lincombvects-5",
  "level": "2",
  "url": "subsec-lincombvects.html#subsec-lincombvects-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Basis Vectors "
},
{
  "id": "subsec-prodvect",
  "level": "1",
  "url": "subsec-prodvect.html",
  "type": "Subsection",
  "number": "1.1.5",
  "title": "Product of Two Vectors",
  "body": " Product of Two Vectors   There are two ways in which vectors are multiplied. The product of one of them is a scalar quantity, called a scalar product (or a dot product) and the other is a vector quantity, called a vector product (or a cross product).    Scalar or Dot Product   Scalar product of two vectors                 The scalar or dot product of two vectors  , and is denoted by and is defined as , where is the angle between and .     Geometrical Interpretation: Let and , as shown in , then  = (length of ) (projection of along a ). The dot product of two vectors is the product of length of one of these vectors and the projection of another in the direction of the first.       Properties:    Commutative Law:     Distributive Law:  Let , , and as shown in , then       Useful Results: If , , , be the unit vector along , , axes, respectively, then       Vector or Cross Product   Vector product of two vectors               The vector or cross product of two vectors and is denoted by and is defined as where is the anlge between and , and is an unit vector perpendicular to the plane made by vectors and and is representing the direction of . Here , , and form a right handed system, as shown in .  Geometrical Interpretation: Let and be the adjacent sides of the parallelogram, as shown in , then    Hence, a vector product of two vectors is the vector area of a parallelogram constructed by the given vectors.    Properties:    Commutative law does not hold good in a vector product, i.e.,    Distributive law:  Let , , and are three vectors such that , , and that form a parallelogram OAEB, BCDE, and OADC, as shown in , then = vector area of + vector area of = vector area of OAEDCBO = vector area of OADCO - vector area of + vector area of  = vector area of .    Useful Results: If , , and are mutually perpendicular unit vectors, then from    Vector product can also be expressed as a determinant form. If and , then          Distributive     Neumonic       "
},
{
  "id": "subsubsec-dotprod-2",
  "level": "2",
  "url": "subsec-prodvect.html#subsubsec-dotprod-2",
  "type": "Figure",
  "number": "1.1.7",
  "title": "",
  "body": " Scalar product of two vectors            "
},
{
  "id": "subsubsec-dotprod-3",
  "level": "2",
  "url": "subsec-prodvect.html#subsubsec-dotprod-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The scalar or dot product of two vectors Geometrical Interpretation: "
},
{
  "id": "subsec-prodvect-4-2",
  "level": "2",
  "url": "subsec-prodvect.html#subsec-prodvect-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Commutative Law: Distributive Law: Useful Results: "
},
{
  "id": "subsubsec-crosprod-2",
  "level": "2",
  "url": "subsec-prodvect.html#subsubsec-crosprod-2",
  "type": "Figure",
  "number": "1.1.8",
  "title": "",
  "body": " Vector product of two vectors            "
},
{
  "id": "subsubsec-crosprod-3",
  "level": "2",
  "url": "subsec-prodvect.html#subsubsec-crosprod-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Geometrical Interpretation: "
},
{
  "id": "subsec-prodvect-6-2",
  "level": "2",
  "url": "subsec-prodvect.html#subsec-prodvect-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Distributive law: Useful Results: "
},
{
  "id": "subsec-prodvect-6-3",
  "level": "2",
  "url": "subsec-prodvect.html#subsec-prodvect-6-3",
  "type": "Figure",
  "number": "1.1.9",
  "title": "",
  "body": "    Distributive     Neumonic     "
},
{
  "id": "subsec-sctrip",
  "level": "1",
  "url": "subsec-sctrip.html",
  "type": "Subsection",
  "number": "1.1.6",
  "title": "Scalar Triple Product",
  "body": " Scalar Triple Product          Definition: Let , , and be three vectors then their scalar triple product is determined by and . If  and then     From the properties of a determinant, we can find that the value of the product depends upon the cyclic order of the vectors and is independent of the position of the dot and cross. Thus, dot and cross may be interchangeable in a scalar triple product, i.e., The value of product changes in sign if the order is non-cyclic, i.e.,      Geometrical Interpretation: Let , , and be the co-terminous edges of the parallelopiped, as shown in figure , then That is, the scalar triple product gives the volume of the parallelopiped having these vectors as co-terminous edges.    Note: If , then , , are coplanars, and   "
},
{
  "id": "fig-sctrip2",
  "level": "2",
  "url": "subsec-sctrip.html#fig-sctrip2",
  "type": "Figure",
  "number": "1.1.10",
  "title": "",
  "body": "   "
},
{
  "id": "subsec-sctrip-3",
  "level": "2",
  "url": "subsec-sctrip.html#subsec-sctrip-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Definition: Geometrical Interpretation: "
},
{
  "id": "subsec-vectripl",
  "level": "1",
  "url": "subsec-vectripl.html",
  "type": "Subsection",
  "number": "1.1.7",
  "title": "Vector Triple Product",
  "body": " Vector Triple Product  If , , and be three vectors, then their vector triple product is denoted by . Let  and then         "
},
{
  "id": "subsec-recvec",
  "level": "1",
  "url": "subsec-recvec.html",
  "type": "Subsection",
  "number": "1.1.8",
  "title": "Reciprocal Vectors",
  "body": " Reciprocal Vectors  If the three vectors , , and are non-coplanar, i.e., and the vectors , , and are defind as then the vectors , , and , , are called the reciprocal sets of vectors.  "
},
{
  "id": "subsec-diffvects",
  "level": "1",
  "url": "subsec-diffvects.html",
  "type": "Subsection",
  "number": "1.1.9",
  "title": "Differentiation of a Vector with respect to Scalars",
  "body": " Differentiation of a Vector with respect to Scalars      Let the vector be a function of scalar variable , then . If only one value of corresponds to each value of , then is defined as a single valued function of the scalar variable . If varies continuously with , then the end point of describes a continuous curve. For different values of , the end point of the vector describes the curve, as shown in figure and can be expressed as the following vector equations.  Note: Any vector can also be written in the form where , , are three scalar functions of . Now, Let O be the origin and P be the position of a moving particle at time , as shown in figure . After the interval the particle reaches at Q, so that [ and , the position vectors.] Since, subtands in time , hence in unit time the vector will be , or, . As , point Q tends to point P and the chord becomes the tangent at P, we define   Then, is a vector in the direction of tangent at P and defines the velocity of the particle at P, is also called the differential coefficient of with respect to 't'. Similarly, is the second order derivative of which gives the acceleration of the particle at P. Note: The derivative of a constant vector is zero, i.e. if is a constant vector, then , because there is no change in in the interval .  "
},
{
  "id": "fig-diffvects",
  "level": "2",
  "url": "subsec-diffvects.html#fig-diffvects",
  "type": "Figure",
  "number": "1.1.11",
  "title": "",
  "body": "   "
},
{
  "id": "subsec-diffvects-4",
  "level": "2",
  "url": "subsec-diffvects.html#subsec-diffvects-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Note: "
},
{
  "id": "subsec-gradscf",
  "level": "1",
  "url": "subsec-gradscf.html",
  "type": "Subsection",
  "number": "1.2.1",
  "title": "Gradient of a Scalar Function",
  "body": " Gradient of a Scalar Function   The gradient of a scalar point function is defined as where an operator is known as operator and read as a gradient or a grad, which is a vector quantity.    Physical Significance of      Let and be two level surfaces having scalar point functions and respectively. The be an unit normal vector at point A and be the distance between the surfaces and along . where is the angle between and , as shown in . Due to a small vector point B and C are very close to each other. Hence the rate of change of at point A in the direction of is greatest and is equal to , and the total differential, But, if be a function of three independent variables then its total differential is given by  From equations and , we get -  Hence the gradient of a scalar function is defined as the maximum rate of change of with respect to the space variables and has the direction of that change. If and are in the same direction then is maximum. If lies on the surface , then , which represents and are perpendicular to each other, i.e., lies along the direction of tangent on the given surface. Thus is normal to the surface of equation .    Directional Derivative  If be a scalar function at point in space then is the rate of change of at in the direction of -axis and is called as the directional derivative of along . Similarly, and are the directional derivative of along - and -axes, respectively. The directional derivative of at A along AB is defined as such that where is the unit vector along \\textbf{AB}, as shown in . Hence the directional derivative of function along the given direction is the projection of a gradient of that function along this direction, i.e.,    "
},
{
  "id": "fig-delphi",
  "level": "2",
  "url": "subsec-gradscf.html#fig-delphi",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": "   "
},
{
  "id": "subsec-div_vecfunc",
  "level": "1",
  "url": "subsec-div_vecfunc.html",
  "type": "Subsection",
  "number": "1.2.2",
  "title": "Divergence of  a  Vector  Function",
  "body": " Divergence of a Vector Function    divergence of vector function If be the vector point function then divergence of a vector is defined as   which is a scalar quantity.    Physical Significance of      Let be the velocity of fluid at point P . If P be the centre of an elementary parallelopiped considering in the moving fluid and are the edges of such element, then the x- component of velocity at point P = , as shown in figure. The x- component of velocity at the middle of the face ABCD =  [using Taylor's series, ]  Similarly, x- component of velocity at the middle of face EFGH Since the parallelopiped is very small, the value at the middle of face is considered as the average over that face. The volume of fluid entering per unit time through the face ABCD =velocity area of the face  and volume of fluid leaving per unit time through face EFGH Therefore, loss in volume of fluid per unit time along x- axis  Similarly, losses in volume per unit time along y- and z- axes, respectively are Hence, total loss in volume per unit time =  or, total loss in volume per unit time per unit volume =    The divergence of a vector field at a point gives the rate at which the fluid is diverging from that point per unit volume. If div is positive at a point, then either the fluid is expanding and its density at that point is decreasing with time, or the point is a source of the fluid. If div is negative, then either the fluid is condensing and its density is increasing at that point, or the point is a sink. If the fluid is incompressible, then there is no loss or gain in volume.  Hence, div , and is called a solenoidal vector function.   "
},
{
  "id": "fig-div_vect",
  "level": "2",
  "url": "subsec-div_vecfunc.html#fig-div_vect",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": "   "
},
{
  "id": "subsec-curl_vect",
  "level": "1",
  "url": "subsec-curl_vect.html",
  "type": "Subsection",
  "number": "1.2.3",
  "title": "Curl of a Vector Function",
  "body": " Curl of a Vector Function    curl of vector function If be the vector point function at a point in space then curl of is defined as which is a vector quantity.    Physical Significance of  Consider a small rectangular plane area in a region of a non-lamellar vector field. A field is called a non-lamellar if its line integral around a cloased path is non-zero. When the rectangular area is placed in the position ABCD, i.e. perpendicular to the vector field as shown in , then the field is normal to each side of the rectangle and hence the line integral along all sides is zero. In the position of , rectangle is parallel to the field and the line integrals along and are zero while that along and have finite values. Thus the line integral around the boundary of the rectangle has a finite value. The value of a vector field along the upper and lower edges is assumed to be different in non-lamellar vector fields, the value of the line integral around a closed path depends upon the orientation of the small area considered in the region of the vector field. There is a certain orientation of the plane area for which the line integral of the vector field is maximum. This maximum line integral when computed for unit area is called the curl of the vector field. It is a vector quantity directed along the normal to the exploring area. The normal is determined by the right-hand screw rule. Actually, curl is a measurement of the circulation of vector field around a point. If a component of vector field is tangentail to the contour, then the curl will be positive; if the component is opposite to the tangential direction of the contour, then the curl will be negative; and curl is zero at the center point of contour.               Let be the vector field at point P(x,y,z). If P be the center of a test area as shown in and and are its sides, then the value of field at the middle of side  the value of field at middle of side  the value of field at middle of side  the value of field at the middle of side  Since the test area is so small that the value of field at the middle of side is taken as an average along that side. Therefore, the line integral of field along and    Similarly, the line integral along and . Therefore, the line integral around the rectangle  where is area of a rectangle and gives its direction.  Therefore, line integral per unit area When the rectangle is placed in zx plane and yz plane then the line integral per unit area obtained will be Thus, the line integral per unit area through the closed surface  If then vector is called an irrotational vector .   "
},
{
  "id": "subsubsec-signif_curl-2",
  "level": "2",
  "url": "subsec-curl_vect.html#subsubsec-signif_curl-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "non-lamellar "
},
{
  "id": "subsubsec-signif_curl-3",
  "level": "2",
  "url": "subsec-curl_vect.html#subsubsec-signif_curl-3",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": "            "
},
{
  "id": "sec_first-examplesA",
  "level": "1",
  "url": "sec_first-examplesA.html",
  "type": "Section",
  "number": "1.3",
  "title": "Examples A",
  "body": " Examples A   Vectors    Prove that the linear velocity of a point in figure below of a rigid body rotating about an axis passing through a point is given by , where and are an angular velocity of a body and a position vector of point , respectively.     Let , , and is perpendicular to , as shown in figure. Suppose the velocity of the body at point P be and be a unit vector perpendicular to and . Then = velocity of P perpendicular to and .  Hence, . proved.      Show that the vectors , , and are coplanar. Where , , and are non-coplanar.    Let then,    Hence, , , and are coplanar.      If , find the angles that makes with and .     or, equating the coefficients of and , we get- and  makes angle with , and is on .      If , , and are a reciprocal system to , , then prove that .      Now,  From equation , we have -  Note: The system of unit vectors , , and has its own reciprocal.      Prove that     Let, then, similarly, we can find the value of , , and etc. Now, [using properties of determinant where rows, (or, column) can be exchanged without changing the value of determinant.]        Field    Find the velocity and acceleration of a particle which is moving along the curve , , and at time and .    Let . Therefore,   At , velocity = and acceleration = .  At , velocity = and acceleration = .      The position of a particle at time is . Find an acceleration of the particle at time when it becomes normal to the position vector.     At , and If and are normal, then . or,        If and are two scalar functions. Prove                          Show that .           If , find grad at point .                 Find the unit vector normal to the surface at point P (2,0,1).    Let Then,  grad at point (2,0,1) = but, grad , where is the unit normal vector.       For the function , find the magnitude of the directional derivative along a line making an angle with x- axis at position (0,2).    Let,  grad at (0,2) =   The line = .   Therefore, the unit vector along a line CA Hence the directional derivative at (0,2) in figure, in the direction of CA        Find the angle between the surfaces and at the point (2,-1,2).    Let a normal to the surface at (2,-1,2) be and a normal to the surface at (2,-1,2) is The angle between the surfaces at any point is the angle between the normals to the surfaces at that point. where is the required angle. Now, or,        Divergence of a vector field    Prove that              Let and . Then,                  Prove that     Let and , then  or,       Prove that .     Where, is called Laplacian Operator .      Determine the constant if a vector is solenoidal.    If then is solenoidal. Hence, Ans.      Prove that .    We have since, , we have Hence,       Curl of Vector    Prove that     We have              Prove that     and                             Prove that     We have Put, , then       If a vector is irrotational, find the values of the constants , , and .    We have , or, , or,  now, equating the coefficients of , , , we get-       If and is a solution of Laplace's equation, then show that   , and  evaluate          here, is a Laplacian operator. But, and  Similarly,  also,    Let , so that also, suppose and . Then as we have             Find the curl of a vector field .    We have        "
},
{
  "id": "sec_first-examplesA-2-2",
  "level": "2",
  "url": "sec_first-examplesA.html#sec_first-examplesA-2-2",
  "type": "Example",
  "number": "1.3.1",
  "title": "",
  "body": "  Prove that the linear velocity of a point in figure below of a rigid body rotating about an axis passing through a point is given by , where and are an angular velocity of a body and a position vector of point , respectively.     Let , , and is perpendicular to , as shown in figure. Suppose the velocity of the body at point P be and be a unit vector perpendicular to and . Then = velocity of P perpendicular to and .  Hence, . proved.   "
},
{
  "id": "sec_first-examplesA-2-3",
  "level": "2",
  "url": "sec_first-examplesA.html#sec_first-examplesA-2-3",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": "  Show that the vectors , , and are coplanar. Where , , and are non-coplanar.    Let then,    Hence, , , and are coplanar.   "
},
{
  "id": "sec_first-examplesA-2-4",
  "level": "2",
  "url": "sec_first-examplesA.html#sec_first-examplesA-2-4",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": "  If , find the angles that makes with and .     or, equating the coefficients of and , we get- and  makes angle with , and is on .   "
},
{
  "id": "sec_first-examplesA-2-5",
  "level": "2",
  "url": "sec_first-examplesA.html#sec_first-examplesA-2-5",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  If , , and are a reciprocal system to , , then prove that .      Now,  From equation , we have -  Note: The system of unit vectors , , and has its own reciprocal.   "
},
{
  "id": "sec_first-examplesA-2-6",
  "level": "2",
  "url": "sec_first-examplesA.html#sec_first-examplesA-2-6",
  "type": "Example",
  "number": "1.3.5",
  "title": "",
  "body": "  Prove that     Let, then, similarly, we can find the value of , , and etc. Now, [using properties of determinant where rows, (or, column) can be exchanged without changing the value of determinant.]     "
},
{
  "id": "sec_first-examplesA-3-2",
  "level": "2",
  "url": "sec_first-examplesA.html#sec_first-examplesA-3-2",
  "type": "Example",
  "number": "1.3.6",
  "title": "",
  "body": "  Find the velocity and acceleration of a particle which is moving along the curve , , and at time and .    Let . Therefore,   At , velocity = and acceleration = .  At , velocity = and acceleration = .   "
},
{
  "id": "sec_first-examplesA-3-3",
  "level": "2",
  "url": "sec_first-examplesA.html#sec_first-examplesA-3-3",
  "type": "Example",
  "number": "1.3.7",
  "title": "",
  "body": "  The position of a particle at time is . Find an acceleration of the particle at time when it becomes normal to the position vector.     At , and If and are normal, then . or,     "
},
{
  "id": "sec_first-examplesA-3-4",
  "level": "2",
  "url": "sec_first-examplesA.html#sec_first-examplesA-3-4",
  "type": "Example",
  "number": "1.3.8",
  "title": "",
  "body": "  If and are two scalar functions. Prove                       "
},
{
  "id": "sec_first-examplesA-3-5",
  "level": "2",
  "url": "sec_first-examplesA.html#sec_first-examplesA-3-5",
  "type": "Example",
  "number": "1.3.9",
  "title": "",
  "body": "  Show that .        "
},
{
  "id": "sec_first-examplesA-3-6",
  "level": "2",
  "url": "sec_first-examplesA.html#sec_first-examplesA-3-6",
  "type": "Example",
  "number": "1.3.10",
  "title": "",
  "body": "  If , find grad at point .              "
},
{
  "id": "sec_first-examplesA-3-7",
  "level": "2",
  "url": "sec_first-examplesA.html#sec_first-examplesA-3-7",
  "type": "Example",
  "number": "1.3.11",
  "title": "",
  "body": "  Find the unit vector normal to the surface at point P (2,0,1).    Let Then,  grad at point (2,0,1) = but, grad , where is the unit normal vector.    "
},
{
  "id": "sec_first-examplesA-3-8",
  "level": "2",
  "url": "sec_first-examplesA.html#sec_first-examplesA-3-8",
  "type": "Example",
  "number": "1.3.12",
  "title": "",
  "body": "  For the function , find the magnitude of the directional derivative along a line making an angle with x- axis at position (0,2).    Let,  grad at (0,2) =   The line = .   Therefore, the unit vector along a line CA Hence the directional derivative at (0,2) in figure, in the direction of CA     "
},
{
  "id": "sec_first-examplesA-3-9",
  "level": "2",
  "url": "sec_first-examplesA.html#sec_first-examplesA-3-9",
  "type": "Example",
  "number": "1.3.13",
  "title": "",
  "body": "  Find the angle between the surfaces and at the point (2,-1,2).    Let a normal to the surface at (2,-1,2) be and a normal to the surface at (2,-1,2) is The angle between the surfaces at any point is the angle between the normals to the surfaces at that point. where is the required angle. Now, or,     "
},
{
  "id": "sec_first-examplesA-4-2",
  "level": "2",
  "url": "sec_first-examplesA.html#sec_first-examplesA-4-2",
  "type": "Example",
  "number": "1.3.14",
  "title": "",
  "body": "  Prove that              Let and . Then,               "
},
{
  "id": "sec_first-examplesA-4-3",
  "level": "2",
  "url": "sec_first-examplesA.html#sec_first-examplesA-4-3",
  "type": "Example",
  "number": "1.3.15",
  "title": "",
  "body": "  Prove that     Let and , then  or,    "
},
{
  "id": "sec_first-examplesA-4-4",
  "level": "2",
  "url": "sec_first-examplesA.html#sec_first-examplesA-4-4",
  "type": "Example",
  "number": "1.3.16",
  "title": "",
  "body": "  Prove that .     Where, is called Laplacian Operator .   "
},
{
  "id": "sec_first-examplesA-4-5",
  "level": "2",
  "url": "sec_first-examplesA.html#sec_first-examplesA-4-5",
  "type": "Example",
  "number": "1.3.17",
  "title": "",
  "body": "  Determine the constant if a vector is solenoidal.    If then is solenoidal. Hence, Ans.   "
},
{
  "id": "sec_first-examplesA-4-6",
  "level": "2",
  "url": "sec_first-examplesA.html#sec_first-examplesA-4-6",
  "type": "Example",
  "number": "1.3.18",
  "title": "",
  "body": "  Prove that .    We have since, , we have Hence,    "
},
{
  "id": "sec_first-examplesA-5-2",
  "level": "2",
  "url": "sec_first-examplesA.html#sec_first-examplesA-5-2",
  "type": "Example",
  "number": "1.3.19",
  "title": "",
  "body": "  Prove that     We have           "
},
{
  "id": "sec_first-examplesA-5-3",
  "level": "2",
  "url": "sec_first-examplesA.html#sec_first-examplesA-5-3",
  "type": "Example",
  "number": "1.3.20",
  "title": "",
  "body": "  Prove that     and                          "
},
{
  "id": "sec_first-examplesA-5-4",
  "level": "2",
  "url": "sec_first-examplesA.html#sec_first-examplesA-5-4",
  "type": "Example",
  "number": "1.3.21",
  "title": "",
  "body": "  Prove that     We have Put, , then    "
},
{
  "id": "sec_first-examplesA-5-5",
  "level": "2",
  "url": "sec_first-examplesA.html#sec_first-examplesA-5-5",
  "type": "Example",
  "number": "1.3.22",
  "title": "",
  "body": "  If a vector is irrotational, find the values of the constants , , and .    We have , or, , or,  now, equating the coefficients of , , , we get-    "
},
{
  "id": "sec_first-examplesA-5-6",
  "level": "2",
  "url": "sec_first-examplesA.html#sec_first-examplesA-5-6",
  "type": "Example",
  "number": "1.3.23",
  "title": "",
  "body": "  If and is a solution of Laplace's equation, then show that   , and  evaluate          here, is a Laplacian operator. But, and  Similarly,  also,    Let , so that also, suppose and . Then as we have          "
},
{
  "id": "sec_first-examplesA-5-7",
  "level": "2",
  "url": "sec_first-examplesA.html#sec_first-examplesA-5-7",
  "type": "Example",
  "number": "1.3.24",
  "title": "",
  "body": "  Find the curl of a vector field .    We have      "
},
{
  "id": "subsec-lineint",
  "level": "1",
  "url": "subsec-lineint.html",
  "type": "Subsection",
  "number": "1.4.1",
  "title": "The Line Integral",
  "body": " The Line Integral       Let us consider a curve , as shown in and a vector function acting at a point P then the line integral of a vector function along that curve is defined as integral of the component of along the tangent to the curve . Therefore, the component of along a tangent at P = dot product of with a unit vector along . [ is a unit vector along and is a small element and is a small arc of curve at P.] from A to B along the curve If a force is acting on a particle along arc AB, then the line integral gives the total work done by the force as work done = . If be the velocity of a liquid, then the line integral is called the flow of a vector field along the curve or the circulation of around the curve . If , then, is called an irrotational vector. The integration around a closed curve is denoted by the symbol in place of .  "
},
{
  "id": "fig-fig15",
  "level": "2",
  "url": "subsec-lineint.html#fig-fig15",
  "type": "Figure",
  "number": "1.4.1",
  "title": "",
  "body": "    "
},
{
  "id": "subsec-surf_int",
  "level": "1",
  "url": "subsec-surf_int.html",
  "type": "Subsection",
  "number": "1.4.2",
  "title": "The Surface Integral",
  "body": " The Surface Integral        surface integral Let us consider the surface S in a vector field of function , as shown in . The surface integral of a vector function over the surface S is defined as the integral of the components of along the normal to the surface. Therefore, component of along the normal where is the unit normal vector to an element and here, is a scalar function and also [The projection of on the plane is or, ].   Surface integral of over S  Note:  where is the velocity of fluid and denotes the amount of fluid passing normally through the surface element per unit time. [If , then is said to be a solenoidal vector].  "
},
{
  "id": "fig-fig16",
  "level": "2",
  "url": "subsec-surf_int.html#fig-fig16",
  "type": "Figure",
  "number": "1.4.2",
  "title": "",
  "body": "    "
},
{
  "id": "subsec-surf_int-4",
  "level": "2",
  "url": "subsec-surf_int.html#subsec-surf_int-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Note: "
},
{
  "id": "subsec-volint",
  "level": "1",
  "url": "subsec-volint.html",
  "type": "Subsection",
  "number": "1.4.3",
  "title": "The Volume Integral",
  "body": " The Volume Integral       Let us consider the volume is enclosed by a closed the surface , as shown in which is lying in the vector field of function , then the If is scalar point function in volume , then is a volume integral.  "
},
{
  "id": "fig-fig17",
  "level": "2",
  "url": "subsec-volint.html#fig-fig17",
  "type": "Figure",
  "number": "1.4.3",
  "title": "",
  "body": "    "
},
{
  "id": "subsec-divergence_thrm",
  "level": "1",
  "url": "subsec-divergence_thrm.html",
  "type": "Subsection",
  "number": "1.4.4",
  "title": "Gauss’s Divergence Theorem",
  "body": " Gauss's Divergence Theorem   Gauss' divergence theorem The surface integral of the normal component of function over the boundary of a closed surface of any shape is equal to the volume integral of the divergence of taken throughout the enclosed volume V, i.e.,    From right - hand side of the above equation, we have - Since the theorem is valid for any shape. We chose parallelopiped of volume V enclosed by the surface S, as showh in the figure .       From eqn. let us first evaluate - That is, [value of along z axis is ]  But, (bottom surface ) and (top).  Hence from eqn. , we get-  where surface integrals of the other sides are zero because is perpendicular to the surfaces . Similarly, we can show that and Adding eqns. , we get-    "
},
{
  "id": "subsec-divergence_thrm-3",
  "level": "2",
  "url": "subsec-divergence_thrm.html#subsec-divergence_thrm-3",
  "type": "Proof",
  "number": "1.4.4.1",
  "title": "",
  "body": " From right - hand side of the above equation, we have - Since the theorem is valid for any shape. We chose parallelopiped of volume V enclosed by the surface S, as showh in the figure .       From eqn. let us first evaluate - That is, [value of along z axis is ]  But, (bottom surface ) and (top).  Hence from eqn. , we get-  where surface integrals of the other sides are zero because is perpendicular to the surfaces . Similarly, we can show that and Adding eqns. , we get-   "
},
{
  "id": "subsec-stoke_thrm",
  "level": "1",
  "url": "subsec-stoke_thrm.html",
  "type": "Subsection",
  "number": "1.4.5",
  "title": "Stoke’s Theorem",
  "body": " Stoke's Theorem   Stoke's theorem The line integral of the tangential component of a vector taken around a simple closed curve C is equal to the surface integral of normal component of the curl of taken over any surface S having C as its boundary, i.e. where is a unit normal vector over the surface ds, as shown in .         Let us first prove,  Let be the equation of surface S and its projection on x-y plane is but on the surface S, we have . and ; where is tangent to the surface ds at point A and is perpendicular to . or,  putting the values of eqns. in eqn. , we get-  At point , is +ve (front part) and at , is -ve (back part).  Similarly, we can find, and Combining these we get,    "
},
{
  "id": "fig-fig23",
  "level": "2",
  "url": "subsec-stoke_thrm.html#fig-fig23",
  "type": "Figure",
  "number": "1.4.5",
  "title": "",
  "body": "    "
},
{
  "id": "subsec-stoke_thrm-4",
  "level": "2",
  "url": "subsec-stoke_thrm.html#subsec-stoke_thrm-4",
  "type": "Proof",
  "number": "1.4.5.1",
  "title": "",
  "body": "  Let us first prove,  Let be the equation of surface S and its projection on x-y plane is but on the surface S, we have . and ; where is tangent to the surface ds at point A and is perpendicular to . or,  putting the values of eqns. in eqn. , we get-  At point , is +ve (front part) and at , is -ve (back part).  Similarly, we can find, and Combining these we get,   "
},
{
  "id": "sec_first-examplesB",
  "level": "1",
  "url": "sec_first-examplesB.html",
  "type": "Section",
  "number": "1.5",
  "title": "Examples B",
  "body": " Examples B   Vector Integration    Find the total work done by a force if it displaces a particle from (0,0) to (1,4) along a curve .    Along the given curve, as , and or,          Find , if a particle is traversing counter clockwise on the curve due to the influence of force Here is a circle  .    Suppose and . Then,  Parametric equations of the circle are from the given figure. and        Show that the flux, , where and is the surface of the cube bounded by the planes , , , , and , as shown in figure                     On putting these values in eqn. , we get -       Evaluate , where and is the part of plane , which is located in the first octant. [In first octant the value of coordinates are positive.]     The surface and its projection on the x-y plane are shown in figure. Now, Where,    and also, but from the equation of surface, ,   From eqn.   To integrate it, consider the relation and cover the whole region R, i.e., the region BOA where y varies from to , and x varies from to          Evaluate , where and is the sutface of cylinder included in the first octant between to as shown in figure.      But,  and also,          If , evaluate where is the region bounded by the surfaces , , , , and , .                   Evaluate , where is the closed region bounded by the planes , , and , and .        varies from to , varies from to , and varies from to .    On solving, we get-         Gauss's Divergence Theorem    The electric field of a certain space is given by Use Gauss's theorem to evaluate the charge enclosed in a cube of side length .    From divergence theorem, we have Here, , while and is each zero. Since, volume of a cube = .  But, from Gauss's law in electrostatics, we have - where is the charge within the surface which encloses the volume . Equating eqns. and , we get -        Use divergence theorem to evaluate where and is the surface of the sphere .    The divergence theorem is         Evaluate surface integral where , and S is the surface of the tetrahedron and is the unit normal in the outward direction to the closed surface S, as shown in the figure.     We have -            Stoke's Theorem    Use Stoke's theorem to evaluate where C is the circle , corresponding to the surface of sphere of unit radius, as shown in the figure.       From Stoke's theorem,  Putting the value of in eqn. , we get -           Apply Stoke's theorem to evaluate , where , S is the surface of the paraboloid and is the unit normal to S, as shown in figure below.       Now for circle, we have -         Verify Stoke's thereom for the vector field ver the portion of the plane cut off by the coordinate planes.    Consider the surface of boundary as shown by the arrows in the figure below.   But, Along AB, , , and   Along BC, , , and .  Along CA, , , and .  Hence, Also,    Now integrate this vector over the three surfaces , , and lying on the plane . Over the surface , , The surface integral over the surface ,  Over the surface , , The surface integral over the surface ,    Over the surface , , The surface integral over the surface ,  Therefore, total surface integral = Hence from eqns. and , Stoke's theorem is verified.     "
},
{
  "id": "sec_first-examplesB-2-2",
  "level": "2",
  "url": "sec_first-examplesB.html#sec_first-examplesB-2-2",
  "type": "Example",
  "number": "1.5.1",
  "title": "",
  "body": "  Find the total work done by a force if it displaces a particle from (0,0) to (1,4) along a curve .    Along the given curve, as , and or,       "
},
{
  "id": "sec_first-examplesB-2-3",
  "level": "2",
  "url": "sec_first-examplesB.html#sec_first-examplesB-2-3",
  "type": "Example",
  "number": "1.5.2",
  "title": "",
  "body": "  Find , if a particle is traversing counter clockwise on the curve due to the influence of force Here is a circle  .    Suppose and . Then,  Parametric equations of the circle are from the given figure. and     "
},
{
  "id": "sec_first-examplesB-2-4",
  "level": "2",
  "url": "sec_first-examplesB.html#sec_first-examplesB-2-4",
  "type": "Example",
  "number": "1.5.3",
  "title": "",
  "body": "  Show that the flux, , where and is the surface of the cube bounded by the planes , , , , and , as shown in figure                     On putting these values in eqn. , we get -    "
},
{
  "id": "sec_first-examplesB-2-5",
  "level": "2",
  "url": "sec_first-examplesB.html#sec_first-examplesB-2-5",
  "type": "Example",
  "number": "1.5.4",
  "title": "",
  "body": "  Evaluate , where and is the part of plane , which is located in the first octant. [In first octant the value of coordinates are positive.]     The surface and its projection on the x-y plane are shown in figure. Now, Where,    and also, but from the equation of surface, ,   From eqn.   To integrate it, consider the relation and cover the whole region R, i.e., the region BOA where y varies from to , and x varies from to       "
},
{
  "id": "sec_first-examplesB-2-6",
  "level": "2",
  "url": "sec_first-examplesB.html#sec_first-examplesB-2-6",
  "type": "Example",
  "number": "1.5.5",
  "title": "",
  "body": "  Evaluate , where and is the sutface of cylinder included in the first octant between to as shown in figure.      But,  and also,       "
},
{
  "id": "sec_first-examplesB-2-7",
  "level": "2",
  "url": "sec_first-examplesB.html#sec_first-examplesB-2-7",
  "type": "Example",
  "number": "1.5.6",
  "title": "",
  "body": "  If , evaluate where is the region bounded by the surfaces , , , , and , .                "
},
{
  "id": "sec_first-examplesB-2-8",
  "level": "2",
  "url": "sec_first-examplesB.html#sec_first-examplesB-2-8",
  "type": "Example",
  "number": "1.5.7",
  "title": "",
  "body": "  Evaluate , where is the closed region bounded by the planes , , and , and .        varies from to , varies from to , and varies from to .    On solving, we get-      "
},
{
  "id": "sec_first-examplesB-3-2",
  "level": "2",
  "url": "sec_first-examplesB.html#sec_first-examplesB-3-2",
  "type": "Example",
  "number": "1.5.8",
  "title": "",
  "body": "  The electric field of a certain space is given by Use Gauss's theorem to evaluate the charge enclosed in a cube of side length .    From divergence theorem, we have Here, , while and is each zero. Since, volume of a cube = .  But, from Gauss's law in electrostatics, we have - where is the charge within the surface which encloses the volume . Equating eqns. and , we get -     "
},
{
  "id": "sec_first-examplesB-3-3",
  "level": "2",
  "url": "sec_first-examplesB.html#sec_first-examplesB-3-3",
  "type": "Example",
  "number": "1.5.9",
  "title": "",
  "body": "  Use divergence theorem to evaluate where and is the surface of the sphere .    The divergence theorem is      "
},
{
  "id": "sec_first-examplesB-3-4",
  "level": "2",
  "url": "sec_first-examplesB.html#sec_first-examplesB-3-4",
  "type": "Example",
  "number": "1.5.10",
  "title": "",
  "body": "  Evaluate surface integral where , and S is the surface of the tetrahedron and is the unit normal in the outward direction to the closed surface S, as shown in the figure.     We have -         "
},
{
  "id": "sec_first-examplesB-4-2",
  "level": "2",
  "url": "sec_first-examplesB.html#sec_first-examplesB-4-2",
  "type": "Example",
  "number": "1.5.11",
  "title": "",
  "body": "  Use Stoke's theorem to evaluate where C is the circle , corresponding to the surface of sphere of unit radius, as shown in the figure.       From Stoke's theorem,  Putting the value of in eqn. , we get -        "
},
{
  "id": "sec_first-examplesB-4-3",
  "level": "2",
  "url": "sec_first-examplesB.html#sec_first-examplesB-4-3",
  "type": "Example",
  "number": "1.5.12",
  "title": "",
  "body": "  Apply Stoke's theorem to evaluate , where , S is the surface of the paraboloid and is the unit normal to S, as shown in figure below.       Now for circle, we have -      "
},
{
  "id": "sec_first-examplesB-4-4",
  "level": "2",
  "url": "sec_first-examplesB.html#sec_first-examplesB-4-4",
  "type": "Example",
  "number": "1.5.13",
  "title": "",
  "body": "  Verify Stoke's thereom for the vector field ver the portion of the plane cut off by the coordinate planes.    Consider the surface of boundary as shown by the arrows in the figure below.   But, Along AB, , , and   Along BC, , , and .  Along CA, , , and .  Hence, Also,    Now integrate this vector over the three surfaces , , and lying on the plane . Over the surface , , The surface integral over the surface ,  Over the surface , , The surface integral over the surface ,    Over the surface , , The surface integral over the surface ,  Therefore, total surface integral = Hence from eqns. and , Stoke's theorem is verified.   "
},
{
  "id": "subsec-grad_curvcord",
  "level": "1",
  "url": "subsec-grad_curvcord.html",
  "type": "Subsection",
  "number": "1.6.1",
  "title": "The Gradient in Curvilinear Coordinates",
  "body": " The Gradient in Curvilinear Coordinates  Let be the scalar function of orthogonal curvilinear coordinates , then, gradient in curv. coord.  where are to be determined. We know that Now, As, . from eqns. and , we get - Similarly, and  This indicates the del operator as   "
},
{
  "id": "subsec-div_curvcord",
  "level": "1",
  "url": "subsec-div_curvcord.html",
  "type": "Subsection",
  "number": "1.6.2",
  "title": "The Divergence in Curvilinear Coordinates",
  "body": " The Divergence in Curvilinear Coordinates   divergence in curv. coord. Let be the vector function of orthoganal curvilinear coordinates , then      "
},
{
  "id": "subsec-curl_curvcord",
  "level": "1",
  "url": "subsec-curl_curvcord.html",
  "type": "Subsection",
  "number": "1.6.3",
  "title": "The Curl in Curvilinear Coordinates",
  "body": " The Curl in Curvilinear Coordinates   curl in curv. coord.            "
},
{
  "id": "subsec-lapl_curvcord",
  "level": "1",
  "url": "subsec-lapl_curvcord.html",
  "type": "Subsection",
  "number": "1.6.4",
  "title": "Laplacian in Curvilinear Coordinate Systems",
  "body": " Laplacian in Curvilinear Coordinate Systems   Laplacian in curv. coord. we know that , put , then  also Hence, and from eqn. ,  which is the required expression.   Note: If and , are replaced by then all the above expressions reduce into usual expressions in rectangular coordinates where is replaced by .  "
},
{
  "id": "subsec-cylind_cord",
  "level": "1",
  "url": "subsec-cylind_cord.html",
  "type": "Subsection",
  "number": "1.6.5",
  "title": "Cylindrical  Orthogonal Curvilinear Coordinates",
  "body": " Cylindrical Orthogonal Curvilinear Coordinates   cylindrical curv. Coord. Let the curvilinear coordinates of point P in space be and corresponding cartesian coordinates be . The projection of point P on the z-plane is Q as shown in , whose polar coordinates in this plane are . The cylindrical coordinates of point P are then specified by where, . The corresponding transformation into cartesian systems are       Let be the position vector of point P in a cartesian system, then we can write [from eqn. ], in a cylindrical system. Now the tangent vectors of in a cylindrical system are   But, scale factors are the magnitude of tangent vectors, then we have -   If are the unit tangent vectors along the curves , respectively then in cylindrical coordinates, we have -  in curvilinear coordinates.  and  we can also find the values of as - and Now, if is a function of , i.e. , then  and   But in curvilinear coordinates, equating eqns. and , we get -   and .  "
},
{
  "id": "fig-fig29",
  "level": "2",
  "url": "subsec-cylind_cord.html#fig-fig29",
  "type": "Figure",
  "number": "1.6.2",
  "title": "",
  "body": "   "
},
{
  "id": "subsec-spher_cord",
  "level": "1",
  "url": "subsec-spher_cord.html",
  "type": "Subsection",
  "number": "1.6.6",
  "title": "Spherical  Orthogonal Curvilinear  Coordinates",
  "body": " Spherical Orthogonal Curvilinear Coordinates   spherical curv. coord. Let be the curvilinear coordinates of point P and be its corresponding cartesian coordinates. If be the position vector of point P then the spherical coordinates of point P are specified by , as shown in . where . The corresponding transformation into cartesian systems are , , and . Here, or,  Similarly, and         But in curvilinear coordinates from eqn. . Equating eqns. and , we get- and (u,v,w) is replaced by , and .   Alternative method to find The position vector of point P in spherical coordinates is The tangent vectors of which is given as     Now, substituting these values in different expressions in curvilinear system, we get -          "
},
{
  "id": "fig-fig30",
  "level": "2",
  "url": "subsec-spher_cord.html#fig-fig30",
  "type": "Figure",
  "number": "1.6.3",
  "title": "",
  "body": "   "
},
{
  "id": "sec_first-examplesC",
  "level": "1",
  "url": "sec_first-examplesC.html",
  "type": "Section",
  "number": "1.7",
  "title": "Examples C",
  "body": " Examples C    Prove that a cylindrical coordinate system is orthogonal.    The position vector of any point P in a cylindrical coordinate is Now, are the tangent vectors along the curves , respectively.   The unit vectors along the tangents are     Then,  and Hence , and are mutually perpendicular and the coordinate system is orthogonal.      Express the velocity and acceleration of a particle in cylindrical coordinates.    The position vector of any point in a cylindrical coordinate is defined as   from solving the entities  We get -   and,  Again differentiating w.r.to 't', we get -      after differentiating w.r.to ; also after differentiating w.r.to .       Find an expression for in orthogonal curvilinear system.    We know that the position vector and    Since, , , and are the tangent vectors along the curves , we have - which are the conditions of orthogonality.       A force is described by . Find in a cylindrical coordinates.    Use eqns.  to find       Show that is a solution of in spherical coordinates.    we have -        Find the velocity and acceleration of a moving particle in a spherical coordinates.    We have - Where,   Now, where,   Similarly, other components can be found to obtain the velocity and acceleration.    "
},
{
  "id": "sec_first-examplesC-2",
  "level": "2",
  "url": "sec_first-examplesC.html#sec_first-examplesC-2",
  "type": "Example",
  "number": "1.7.1",
  "title": "",
  "body": "  Prove that a cylindrical coordinate system is orthogonal.    The position vector of any point P in a cylindrical coordinate is Now, are the tangent vectors along the curves , respectively.   The unit vectors along the tangents are     Then,  and Hence , and are mutually perpendicular and the coordinate system is orthogonal.   "
},
{
  "id": "sec_first-examplesC-3",
  "level": "2",
  "url": "sec_first-examplesC.html#sec_first-examplesC-3",
  "type": "Example",
  "number": "1.7.2",
  "title": "",
  "body": "  Express the velocity and acceleration of a particle in cylindrical coordinates.    The position vector of any point in a cylindrical coordinate is defined as   from solving the entities  We get -   and,  Again differentiating w.r.to 't', we get -      after differentiating w.r.to ; also after differentiating w.r.to .    "
},
{
  "id": "sec_first-examplesC-4",
  "level": "2",
  "url": "sec_first-examplesC.html#sec_first-examplesC-4",
  "type": "Example",
  "number": "1.7.3",
  "title": "",
  "body": "  Find an expression for in orthogonal curvilinear system.    We know that the position vector and    Since, , , and are the tangent vectors along the curves , we have - which are the conditions of orthogonality.    "
},
{
  "id": "sec_first-examplesC-5",
  "level": "2",
  "url": "sec_first-examplesC.html#sec_first-examplesC-5",
  "type": "Example",
  "number": "1.7.4",
  "title": "",
  "body": "  A force is described by . Find in a cylindrical coordinates.    Use eqns.  to find    "
},
{
  "id": "sec_first-examplesC-6",
  "level": "2",
  "url": "sec_first-examplesC.html#sec_first-examplesC-6",
  "type": "Example",
  "number": "1.7.5",
  "title": "",
  "body": "  Show that is a solution of in spherical coordinates.    we have -     "
},
{
  "id": "sec_first-examplesC-7",
  "level": "2",
  "url": "sec_first-examplesC.html#sec_first-examplesC-7",
  "type": "Example",
  "number": "1.7.6",
  "title": "",
  "body": "  Find the velocity and acceleration of a moving particle in a spherical coordinates.    We have - Where,   Now, where,   Similarly, other components can be found to obtain the velocity and acceleration.   "
},
{
  "id": "ex_first",
  "level": "1",
  "url": "ex_first.html",
  "type": "Exercises",
  "number": "1.8",
  "title": "Exercise",
  "body": "  Exercise  Prove that the line joining the midpoints of two sides of a triangle is parallel and half to the third.   A particle is displaced from the point whose position vector is to the point whose position vector is under the action of a number of constant forces defined by , , and . Find the work done.   92.    A force is represented in magnitude and direction by the line joining the point A(1,-2,4) to the point B(5,2,3). Find its moment about the point (-2,3,5).        A rigid body is rotating at the rate of 2.5 radians per second about an axis AB, where A and B are the points (1,-2,1) and (3,-4,2). Find the velocity of the point P at (5,-1,1) of the body.        A particle P is moving on a circle of radius with constant angular velocity . Show that its acceleration is .    If , then show that .    Prove that .    If , find at the point (a) (0,0,0) and (b) (1,-2,2).   (a) 5 and (b) 19.    Find the directional derivative of at (1,-2,2) in the direction .   -44\/3.    The temperature of the points in room is given by . A fly located at (1,1,1) desires to fly in such a direction that it will get warm as soon as possible. In what direction should it fly?   Find the unit vector normal to the gradient of a Temperature.        Evaluate         If , find        Prove .  Prove that the vector is solenoidal.  If and are irrotational, prove that is solenoidal.  Prove that .   Find the work done when a force moves a particle from origin to (1,1) along a parabola .        Evaluate over the region R in the xy - plane bounded by .        Evaluate , where V is the closed region bounded by the cylinder and the planes and .   40.    Use divergence theorem to evaluate , where S is the upper part of the sphere above the x-y plane.        Verify divergence theorem for over the region above XOY plane bounded by the cone and the plane .    Using Stoke's theorem, evaluate , where C is the boundary of the triangle with vertices (2,0,0), (0,3,0) and (0,0,6).   21.    Represent the vector in spherical coordinates and determine .          Prove that a spherical coordinate system is orthogonal.   Express the velocity and acceleration of a particle in spherical coordinates.     where,       "
},
{
  "id": "ex_first-2",
  "level": "2",
  "url": "ex_first.html#ex_first-2",
  "type": "Exercise",
  "number": "1.8.1",
  "title": "",
  "body": "Prove that the line joining the midpoints of two sides of a triangle is parallel and half to the third. "
},
{
  "id": "ex_first-3",
  "level": "2",
  "url": "ex_first.html#ex_first-3",
  "type": "Exercise",
  "number": "1.8.2",
  "title": "",
  "body": " A particle is displaced from the point whose position vector is to the point whose position vector is under the action of a number of constant forces defined by , , and . Find the work done.   92.  "
},
{
  "id": "ex_first-4",
  "level": "2",
  "url": "ex_first.html#ex_first-4",
  "type": "Exercise",
  "number": "1.8.3",
  "title": "",
  "body": " A force is represented in magnitude and direction by the line joining the point A(1,-2,4) to the point B(5,2,3). Find its moment about the point (-2,3,5).      "
},
{
  "id": "ex_first-5",
  "level": "2",
  "url": "ex_first.html#ex_first-5",
  "type": "Exercise",
  "number": "1.8.4",
  "title": "",
  "body": " A rigid body is rotating at the rate of 2.5 radians per second about an axis AB, where A and B are the points (1,-2,1) and (3,-4,2). Find the velocity of the point P at (5,-1,1) of the body.      "
},
{
  "id": "ex_first-6",
  "level": "2",
  "url": "ex_first.html#ex_first-6",
  "type": "Exercise",
  "number": "1.8.5",
  "title": "",
  "body": " A particle P is moving on a circle of radius with constant angular velocity . Show that its acceleration is .  "
},
{
  "id": "ex_first-7",
  "level": "2",
  "url": "ex_first.html#ex_first-7",
  "type": "Exercise",
  "number": "1.8.6",
  "title": "",
  "body": " If , then show that .  "
},
{
  "id": "ex_first-8",
  "level": "2",
  "url": "ex_first.html#ex_first-8",
  "type": "Exercise",
  "number": "1.8.7",
  "title": "",
  "body": " Prove that .  "
},
{
  "id": "ex_first-9",
  "level": "2",
  "url": "ex_first.html#ex_first-9",
  "type": "Exercise",
  "number": "1.8.8",
  "title": "",
  "body": " If , find at the point (a) (0,0,0) and (b) (1,-2,2).   (a) 5 and (b) 19.  "
},
{
  "id": "ex_first-10",
  "level": "2",
  "url": "ex_first.html#ex_first-10",
  "type": "Exercise",
  "number": "1.8.9",
  "title": "",
  "body": " Find the directional derivative of at (1,-2,2) in the direction .   -44\/3.  "
},
{
  "id": "ex_first-11",
  "level": "2",
  "url": "ex_first.html#ex_first-11",
  "type": "Exercise",
  "number": "1.8.10",
  "title": "",
  "body": " The temperature of the points in room is given by . A fly located at (1,1,1) desires to fly in such a direction that it will get warm as soon as possible. In what direction should it fly?   Find the unit vector normal to the gradient of a Temperature.      "
},
{
  "id": "ex_first-12",
  "level": "2",
  "url": "ex_first.html#ex_first-12",
  "type": "Exercise",
  "number": "1.8.11",
  "title": "",
  "body": " Evaluate       "
},
{
  "id": "ex_first-13",
  "level": "2",
  "url": "ex_first.html#ex_first-13",
  "type": "Exercise",
  "number": "1.8.12",
  "title": "",
  "body": " If , find       "
},
{
  "id": "ex_first-14",
  "level": "2",
  "url": "ex_first.html#ex_first-14",
  "type": "Exercise",
  "number": "1.8.13",
  "title": "",
  "body": "Prove . "
},
{
  "id": "ex_first-15",
  "level": "2",
  "url": "ex_first.html#ex_first-15",
  "type": "Exercise",
  "number": "1.8.14",
  "title": "",
  "body": "Prove that the vector is solenoidal. "
},
{
  "id": "ex_first-16",
  "level": "2",
  "url": "ex_first.html#ex_first-16",
  "type": "Exercise",
  "number": "1.8.15",
  "title": "",
  "body": "If and are irrotational, prove that is solenoidal. "
},
{
  "id": "ex_first-17",
  "level": "2",
  "url": "ex_first.html#ex_first-17",
  "type": "Exercise",
  "number": "1.8.16",
  "title": "",
  "body": "Prove that . "
},
{
  "id": "ex_first-18",
  "level": "2",
  "url": "ex_first.html#ex_first-18",
  "type": "Exercise",
  "number": "1.8.17",
  "title": "",
  "body": " Find the work done when a force moves a particle from origin to (1,1) along a parabola .      "
},
{
  "id": "ex_first-19",
  "level": "2",
  "url": "ex_first.html#ex_first-19",
  "type": "Exercise",
  "number": "1.8.18",
  "title": "",
  "body": " Evaluate over the region R in the xy - plane bounded by .      "
},
{
  "id": "ex_first-20",
  "level": "2",
  "url": "ex_first.html#ex_first-20",
  "type": "Exercise",
  "number": "1.8.19",
  "title": "",
  "body": " Evaluate , where V is the closed region bounded by the cylinder and the planes and .   40.  "
},
{
  "id": "ex_first-21",
  "level": "2",
  "url": "ex_first.html#ex_first-21",
  "type": "Exercise",
  "number": "1.8.20",
  "title": "",
  "body": " Use divergence theorem to evaluate , where S is the upper part of the sphere above the x-y plane.      "
},
{
  "id": "ex_first-22",
  "level": "2",
  "url": "ex_first.html#ex_first-22",
  "type": "Exercise",
  "number": "1.8.21",
  "title": "",
  "body": " Verify divergence theorem for over the region above XOY plane bounded by the cone and the plane .  "
},
{
  "id": "ex_first-23",
  "level": "2",
  "url": "ex_first.html#ex_first-23",
  "type": "Exercise",
  "number": "1.8.22",
  "title": "",
  "body": " Using Stoke's theorem, evaluate , where C is the boundary of the triangle with vertices (2,0,0), (0,3,0) and (0,0,6).   21.  "
},
{
  "id": "ex_first-24",
  "level": "2",
  "url": "ex_first.html#ex_first-24",
  "type": "Exercise",
  "number": "1.8.23",
  "title": "",
  "body": " Represent the vector in spherical coordinates and determine .         "
},
{
  "id": "ex_first-25",
  "level": "2",
  "url": "ex_first.html#ex_first-25",
  "type": "Exercise",
  "number": "1.8.24",
  "title": "",
  "body": "Prove that a spherical coordinate system is orthogonal. "
},
{
  "id": "ex_first-26",
  "level": "2",
  "url": "ex_first.html#ex_first-26",
  "type": "Exercise",
  "number": "1.8.25",
  "title": "",
  "body": " Express the velocity and acceleration of a particle in spherical coordinates.     where,      "
},
{
  "id": "subsec-2add_vects",
  "level": "1",
  "url": "subsec-2add_vects.html",
  "type": "Subsection",
  "number": "2.1.1",
  "title": "Addition of Vectors",
  "body": " Addition of Vectors    If then  (commutative law)   If then  (associative law)   There exists a unique vector 0 (zero or null vector) in such that . For any in . (Existance of a zero vector)   For each vector in , there exists a unique vector in such that . (Existance of additive inverse)     "
},
{
  "id": "subsec-2add_vects-2",
  "level": "2",
  "url": "subsec-2add_vects.html#subsec-2add_vects-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "(commutative law) (associative law) (Existance of a zero vector) (Existance of additive inverse) "
},
{
  "id": "subsubsec-2mult_vects",
  "level": "1",
  "url": "subsubsec-2mult_vects.html",
  "type": "Subsubsection",
  "number": "2.1.1",
  "title": "Multiplication of Vectors by Scalars",
  "body": " Multiplication of Vectors by Scalars    If then there exists vectors , and in such that ; , and where and are two scalars ( real or complex numbers).  For the zero and unit vectors in there exists the following products and .    "
},
{
  "id": "subsec-2lin_depnd",
  "level": "1",
  "url": "subsec-2lin_depnd.html",
  "type": "Subsection",
  "number": "2.1.2",
  "title": "Linear Dependence and Independence",
  "body": " Linear Dependence and Independence  Two non - zero vectors u and v of a vector space are said to be linearly dependent if one is a scalar multiple of the other i.e. if where is any scalar. In other words, and are linearly dependent if    In eqn. , at least one scalar does not equal to zero. The concepts of linear dependence and independence can also be extended to more than two vectors. A set of vectors is said to be linearly dependent if there exists a corresponding set of scalars , not all zero, such that If and the set of scalars for all , then the set of vectors is said to be linearly independent. Thus we have two orthogonal vectors and .  "
},
{
  "id": "subsec-2dimen_vect",
  "level": "1",
  "url": "subsec-2dimen_vect.html",
  "type": "Subsection",
  "number": "2.1.3",
  "title": "Dimensionality of a Vector Space",
  "body": " Dimensionality of a Vector Space   A vector space is said to be an - dimensional if it contains linearly independent vectors. A vector space is called an infinite - dimensional if there exists an arbitrary large number of linearly independent vectors in the space. If an arbitrary vector in can be represented as a linear combination of vectors in and scalars , \\i.e. then is said to be a span of the vector space . A linearly independent set of vectors that spans a vector space is called a basis for . For example, the unit vectors and of a position vector are the basis for the three - dimensional vector space. The three mutually perpendicular vectors forms an orthogonal basis for a three - dimensional vector space. In other words, if the scalar product of two vectors is zero, the vectors are said to be an orthogonal to each other. The orthogonal bases orthogonal bases of unit magnitude such as and forms a normal orthogonal basis, called an orthonormal basis. A scalar has one component (magnitude only) and hence zero basis vector per component, A vector has 3 components (magnitude and one direction) in 3D and hence has 1 basis vector per component. A tensor of rank 2 (dyad) has components (magnitude and two directions) in 3D hence has 2 basis vectors per component. A tensor of rank 3 (triad) has components (magnitude and three directions) in 3D hence has 3 basis vectors per component.    Inner Product  The inner or scalar product of two vectors u and v is denoted by in vector space , which hold the following properties -  and (unless ). The length (or Norm), , of a vector is defined as . The inner product of two vectors equals zero, for and , then the vectors are said to form an orthogonal set. If the norm within an orthogonal set is unity, i.e. , then the set is called an orthonormal set.    Gram Schmidt's Orthogonalization  An orthogonal basis is the best basis for a vector space because the coefficients of which can easily be expressed a vector as a linear combination of basis vectors. However, we are not always given an orthogonal basis. Gram-Schmidt orthogonalization is a process used to transform a set of linearly independent vectors into a set of orthonormal vectors, which may not be orthogonal to each other. This process is named after Jørgen Pedersen Gram and Erhard Schmidt, who independently developed it in the late century. Let be a set of linearly independent vectors which are not necessarily orthogonal to each other. Now, It is required to obtain a set of orthogonal vectors from the original set of vectors by following the steps below.  In step (1) take , in step (2) let where is a constant to be determined from the condition that to be orthogonal to . That is, or, , and in step (3) let where and are constants to be determined from the conditions that is orthogonal to and . This gives - , since Therefore, we have -   Now, we have three mutually orthogonal vectors and . The same procedure can be continued to obtain other othogonal vectors. Finally, all the vectors can be normalized to obtain an orthonormal set , where .   "
},
{
  "id": "subsubsec-2gram_orth-3",
  "level": "2",
  "url": "subsec-2dimen_vect.html#subsubsec-2gram_orth-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "step (1) step (2) step (3) "
},
{
  "id": "subsec-2lin_trans",
  "level": "1",
  "url": "subsec-2lin_trans.html",
  "type": "Subsection",
  "number": "2.1.4",
  "title": "Linear Transformations",
  "body": " Linear Transformations  The transformation in which the components of a vector in one coordinate system are linear functions of another coordinate system is called a linear transformation. In sych transformation origin of two coordinate systems do not displace. If are the components of a vector in one coordinate system and are those in another coordinate system then after a linear transformation, we have -  Again, the same vector has components , which are linearly related to the components then after a linear transformation, we have - Now it is possible to obtain a transformation directly from the components , from eqns. and ,  where,   "
},
{
  "id": "subsec-2lin_op",
  "level": "1",
  "url": "subsec-2lin_op.html",
  "type": "Subsection",
  "number": "2.1.5",
  "title": "Linear Operators",
  "body": " Linear Operators  An entity which relates every vector in a vector space to another vector in this space by the equation is called an operator. The operator is said to be linear if it possesses the following properties  where is a scalar (a real or complex number).  "
},
{
  "id": "sec_second-examplesA",
  "level": "1",
  "url": "sec_second-examplesA.html",
  "type": "Section",
  "number": "2.2",
  "title": "ExamplesA",
  "body": " ExamplesA    Obtain a set of three orthonormal vectors by the Schmidt's method from the vectors , , and     The given vectors are linearly independent, hence set, Let, We have - and  Hence, Now take where, and Here,   and  Hence,   The corresponding orthonormal set is         Test whether the vectors are linearly independent. If so construct an orthonormal system using Gram-Schmidt's method.     then, implies These equations are satisfied only when , i.e. , and are linearly independent. Again, Let be an orthonormal basis. Then by Gram-Schmidt's method:    We have -   where,  can be obtained.      How are the components of vectors and linear operator transform when we change the coordinate system.    Consider a basis vector defined in terms of the unprimed system by . The coefficient is components of in the unprimed system. Consider an arbitrary vector with components and in the two systems, then Therefore, which is equivalent to the matrix equation multiplying it by on both sides, we get -  then we find the transformation for the components of linear operators by as matrix equations in the two coordinates system, and . As Thus the desired transformation is  This is an example of a similarity transformation which is defined to be a transformation of square matrices of the form . Any algebric matrix remains unchanged under a similarity transformation. For example:      "
},
{
  "id": "sec_second-examplesA-2",
  "level": "2",
  "url": "sec_second-examplesA.html#sec_second-examplesA-2",
  "type": "Example",
  "number": "2.2.1",
  "title": "",
  "body": "  Obtain a set of three orthonormal vectors by the Schmidt's method from the vectors , , and     The given vectors are linearly independent, hence set, Let, We have - and  Hence, Now take where, and Here,   and  Hence,   The corresponding orthonormal set is      "
},
{
  "id": "sec_second-examplesA-3",
  "level": "2",
  "url": "sec_second-examplesA.html#sec_second-examplesA-3",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": "  Test whether the vectors are linearly independent. If so construct an orthonormal system using Gram-Schmidt's method.     then, implies These equations are satisfied only when , i.e. , and are linearly independent. Again, Let be an orthonormal basis. Then by Gram-Schmidt's method:    We have -   where,  can be obtained.   "
},
{
  "id": "sec_second-examplesA-4",
  "level": "2",
  "url": "sec_second-examplesA.html#sec_second-examplesA-4",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": "  How are the components of vectors and linear operator transform when we change the coordinate system.    Consider a basis vector defined in terms of the unprimed system by . The coefficient is components of in the unprimed system. Consider an arbitrary vector with components and in the two systems, then Therefore, which is equivalent to the matrix equation multiplying it by on both sides, we get -  then we find the transformation for the components of linear operators by as matrix equations in the two coordinates system, and . As Thus the desired transformation is  This is an example of a similarity transformation which is defined to be a transformation of square matrices of the form . Any algebric matrix remains unchanged under a similarity transformation. For example:     "
},
{
  "id": "subsec-matrx_algb",
  "level": "1",
  "url": "subsec-matrx_algb.html",
  "type": "Subsection",
  "number": "2.3.1",
  "title": "Matrix Algebra",
  "body": " Matrix Algebra   Matrix algebra deals with mathematical operations on matrices. Matrix algebra is used to solve problems related to electrical circuits, control systems, structural analysis, quantum mechanics, relativity, input-output models, linear regression, and game theory.    Addition  The addition or subtraction for two matrices is defined as . where forall and , e.g., Also, commutative and associative laws are hold good in addition or subtraction of matrices, i.e., and .    Multiplication  The product of two matrices A and B is only possible if the numbers of column in A is equal to the numbers of rows in B. Let be a matrix and be a be matrix, then is matrix, where . For example,    Properties of multiplication    Matrix multiplication is not commutative i.e., .  Matrix multiplication is Associative i.e., .  Matrix multiplication is Distributive i.e., .  Matrix is multiplicabe by unit matrix i.e., .  If the non singular matrix is multiplied by its inverse, a unit matrix is produced, i.e., (If ).      "
},
{
  "id": "subsec-transpose",
  "level": "1",
  "url": "subsec-transpose.html",
  "type": "Subsection",
  "number": "2.3.2",
  "title": "The Transpose of a Matrix, <span class=\"process-math\">\\(A^{t}\\)<\/span>",
  "body": " The Transpose of a Matrix,  If the rows and columns of any matrix A is interchanged then the new matrix is known as transpose of the matrix A and it is denoted by or , i.e. and . For example: if then,    Properties of Transpose Matrix    The transpose of the transpose of a matrix is the matrix itself , i.e., .  The transpose of the sum of two matrices is the sum of their transposes, i.e., .  The transpose of a scalar times the matrix is the scalar times the transpose of the matrix, i.e., where is a scalar.  The transpose of the product of two matrices is the product in reverse order of their transpose, i.e., .  The magnitude of transpose of a matrix is the magnitude of the matrix, i.e., .     "
},
{
  "id": "subsec-comp_conj",
  "level": "1",
  "url": "subsec-comp_conj.html",
  "type": "Subsection",
  "number": "2.3.3",
  "title": "Complex - Conjugate of a Matrix, <span class=\"process-math\">\\(A^{*}\\)<\/span>",
  "body": " Complex - Conjugate of a Matrix,  The matrix formed by taking the complex - conjugate of each element of any matrix A. It is denoted by or . Hence we have (for all and ). For example: let the matrix, then, it's conjugate matrix is If , then A is a real matrix.   Properties of Complex-Conjugate Matrix    The conjugate of the conjugate of matrix is the matrix i.e., .  The complex conjugate of the sum of two matrices is the sum of their complex conjugations, i.e., .  The conjugate of scalar multiple of a matrix is the scalar multiple of its comples conjugate, i.e., , where is a complex number. or, , where is a real scalar number.  The conjugate of the product of two matrices is the product of their conjugates in the same order, i.e., .     "
},
{
  "id": "subsec-herm_conj",
  "level": "1",
  "url": "subsec-herm_conj.html",
  "type": "Subsection",
  "number": "2.3.4",
  "title": "Hermitian Conjugate of a Matrix, <span class=\"process-math\">\\(A^{\\dagger}\\)<\/span>",
  "body": " Hermitian Conjugate of a Matrix,  The transpose of the conjugate of a matrix is called Hermitian conjugate. It is denoted by or , e.g.      Properties of Hermitian Conjugate Matrix    Transpose conjugate of a matrix is the same as conjugate of its transpose, i.e., .  Transpose conjugate of the conjugate transpose of a matrix is the matrix itself, i.e., .  Hermitian conjugate of the sum of two matrices is the sum of their Hermitian conjugate, i.e., .  Hermitian conjugate of the product of two matrices is the product of their Hermitian conjugates in reverse order, i.e., .  Hermitian conjugate of scalar multiple of a matrix is the scalar multiple of its comples conjugate, i.e., , where is a complex number.     "
},
{
  "id": "subsec-sq_mat",
  "level": "1",
  "url": "subsec-sq_mat.html",
  "type": "Subsection",
  "number": "2.3.5",
  "title": "Special Square Matrices",
  "body": " Special Square Matrices   Special square matrices refer to matrices that have certain properties that make them unique in various applications. Some of them are discussed here: Identity matrix, Diagonal matrix, Symmetric matrix, Skew-symmetric matrix, etc.    Unit or Identity Matrix:  This is a square matrix in which all the diagonal elements are equal to 1, and all the other elements are 0. It is denoted by I. and for any matrix A, . A unit matrix is shown as     Diagonal Matrix  This is a square matrix in which all the non-diagonal elements are 0. The diagonal elements can be any numbers, including 0. It is denoted by D. A diagonal matrix can be used to represent a system of linear equations with diagonal coefficients. A diagonal matrix is shown as     The Inverse, Singular, and Non - Singular Matrices  The inverse or reciprocal of a square matrix is denoted by the relation . Non-square matrix does not have inverse. Some of the square matrices also do not have inverses, they are called a singular or noninvertible matrices and those which have inverse are called invertible or non-singular matrices.    Cofactor Matrix,  A cofactor of an element in a given square matrix is the determinant formed by removing the row and column through the element with proper sign. The determinant is preceded by plus sign or minus sign according as the sum of the location numbers of the row and column which have been removed is even or odd. By following the above process of finding a cofactor, we can have as many cofactors as elements in the given matrix. The matrix formed by these process is called a cofactor matrix. It is defined by . For example: if then, where,          Adjoint of a Matrix,  The adjoint or adjugate of a matrix is the transpose of its cofactor matrix. i.e., , e.g.     Properties  The matrices and are commutative and their product is a scalar matrix. The diagonal element of which is , i.e., , where is an unit matrix. Also, where A is a non-singular matrix, i.e., .     Self - Adjoint Matrix  If then the matrix is called a self - adjoint matrix, e.g. and     Symmetric Matrix  If , then the matrix is called a symmetric matrix, e.g.     Antisymmetric (Skew) Matrix  If , then the matrix is called an antisymmetric matrix, e.g.     Hermitian Matrix  If or in a square matrix, then the matrix is said to be a Hermitian matrix, e.g.  If , then is known as a skew Hermitian matrix.    Unitary Matrix  A square matrix is said to be an unitary matrix, if , e.g. and     Orthogonal Matrix  A square matrix A is said to be an orthogonal matrix if , e.g. and,    "
},
{
  "id": "subsec-trace_mat",
  "level": "1",
  "url": "subsec-trace_mat.html",
  "type": "Subsection",
  "number": "2.3.6",
  "title": "The Trace of a Matrix",
  "body": " The Trace of a Matrix  The algebric sum of the elements of principal diagonal in any square matrix is called the trace of a matrix, i.e., For example: then trace of .   Properties    Cyclic Theorem: The trace of a product of two matrices is independent of the order of multiplication, i.e., . We have -  This holds even if . It can be generilezed to .   Trace of the product of a symmetric and an anti - symmetric matrix is zero. Let us consider that A is a symmetric and B is an anti - symmetric matrix, then, [since, and ] or, or,       "
},
{
  "id": "subsec-trace_mat-3-2-1-1-2",
  "level": "2",
  "url": "subsec-trace_mat.html#subsec-trace_mat-3-2-1-1-2",
  "type": "Proof",
  "number": "I.1",
  "title": "",
  "body": "We have -  This holds even if . It can be generilezed to . "
},
{
  "id": "subsec-trace_mat-3-2-1-2-1",
  "level": "2",
  "url": "subsec-trace_mat.html#subsec-trace_mat-3-2-1-2-1",
  "type": "Proof",
  "number": "II.1",
  "title": "",
  "body": "Let us consider that A is a symmetric and B is an anti - symmetric matrix, then, [since, and ] or, or,  "
},
{
  "id": "sec_second-examplesB",
  "level": "1",
  "url": "sec_second-examplesB.html",
  "type": "Section",
  "number": "2.4",
  "title": "ExamplesB",
  "body": " ExamplesB    If and are Hermitian, show that is Hermitian and is skew Hermitian.      and are Hermitian, we have Hence,  i.e., is Hermitian.  Again,  i.e., is skew-Hermitian.      Show that the inverse of a matrix is unique.    Let be a square matrix and the matrices and are inverse of , then also, . Now, That is, Hence, is not different from , which implies that the inverse of a matrix is unique, i.e., there exists only one inverse matrix to a given matrix.      If is a non - singular matrix, then the transpose (conjugate transpose) of inverse is the inverse of the transpose (conjugate transpose) of .  i.e., and .    we know that -   which follows that is the inverse of .  i.e. . proved. Similarly other can be proved.      If and are any two square matrices of the same order, then show that     Let and are two matrices of the same order . Then, = sum of the diagonal elements of the matrix        Show that a real matrix is unitary if and only if it is orthogonal.    If is real matrix, then for to be unitary, we have -    is orthogonal. [or, , i.e., for a matrix to be orthogonal its transpose coincides with its inverse.]  Conversely, if is orthogonal, then    is unitary.      Show that under a unitary transformation, an orthonormal system of basis vectors is transformed into another orthonormal system.    We require,  here, Thus, or, must be an unitary matrix.      Show that a Hermitian matrix remains Hermitian under unitary transformation.    For unitary transformation, If to be Hermitian, then . Taking conjugate transpose of eqn. >, we get -  [ is an identity matrix.] This equality shows that Hermitian matrix remains Hermitian under unitary transformation.      Show that the length of a real vector is preserved under orthogonal transformation.    Let and are the real vectors of matrices and which is related as where is a transformation matrix. For an orthogonal transformation, we have - Since is considered to be an orthogonal. i.e., .  Therefore, from eqn. , we get - where,    Note: In case and are complex then the orthogonal conditions to be i.e., A is an unitary matrix. A real unitary matrix is an orthogonal matrix. shows that the norm of a real vector remains invariant under orthogonal transformation. i.e.,        Show that the eigen values of a Hermitian operator is real and eigen vectors belonging to different eigen values are orthogonal. Or, The eigen values of a Hermitian matrix are all real.    Let and be two eigen values and and be two eigen vectors of Hermitian matrix (operator) . Then premultiplying by to eqn. and to eqn. , respectively, we get - taking conjugate transpose of eqn. , we get - [for Hermitian matrix ] or, equating eqns. and , we get -    Case I: Let , then [ , as is a non - zero vector. i.e., is real for each .   Case II: Let . we have . which means eigen vectors for different eigen values of are orthogonal.      Show that the trace and determinant of a matrix is invarinat under similarity transformation.    Let and are two vectors relative to the basis of unprimed system and are represented by and relative to the basis of a primed system, so that where is transformation matrix. Suppose and are themselves related by the transformation matrix in the unprimed system, so that Now, from eqns. and , we have This implies that i.e., the matrix of transformation for the same two vectors in the coordinate system is related by and . Hence and are said to be related under similarity transformation. From eqn. , we have   after changing the sign for the places. i.e., trace is invarient under similarity transformation. Also, [ ] proved.      Show that diagonalizing matrix of a Hermitian matrix is unitary.    Let be a hermitian matrix and be its diagonalizing matrix, then where are the eigen values of $H$ and are all real.  Taking transposed conjugate on both sides of eqn. , we have which gives   R is a unitary matrix.      Use matrix method to find the voltage drop at resistor . In the given figure , , , , , , , and .    Consider are the currents flowing in the loops as shown in Now using Kirchhoff's voltage law , from loop 1, we have       From loop 2, From loop 3, Hence in the matrix form The determinant of the given matrix is      sign indicats that the current should be taken in opposite direction. Hence, the potential drop at volt.    "
},
{
  "id": "sec_second-examplesB-2",
  "level": "2",
  "url": "sec_second-examplesB.html#sec_second-examplesB-2",
  "type": "Example",
  "number": "2.4.1",
  "title": "",
  "body": "  If and are Hermitian, show that is Hermitian and is skew Hermitian.      and are Hermitian, we have Hence,  i.e., is Hermitian.  Again,  i.e., is skew-Hermitian.   "
},
{
  "id": "sec_second-examplesB-3",
  "level": "2",
  "url": "sec_second-examplesB.html#sec_second-examplesB-3",
  "type": "Example",
  "number": "2.4.2",
  "title": "",
  "body": "  Show that the inverse of a matrix is unique.    Let be a square matrix and the matrices and are inverse of , then also, . Now, That is, Hence, is not different from , which implies that the inverse of a matrix is unique, i.e., there exists only one inverse matrix to a given matrix.   "
},
{
  "id": "sec_second-examplesB-4",
  "level": "2",
  "url": "sec_second-examplesB.html#sec_second-examplesB-4",
  "type": "Example",
  "number": "2.4.3",
  "title": "",
  "body": "  If is a non - singular matrix, then the transpose (conjugate transpose) of inverse is the inverse of the transpose (conjugate transpose) of .  i.e., and .    we know that -   which follows that is the inverse of .  i.e. . proved. Similarly other can be proved.   "
},
{
  "id": "sec_second-examplesB-5",
  "level": "2",
  "url": "sec_second-examplesB.html#sec_second-examplesB-5",
  "type": "Example",
  "number": "2.4.4",
  "title": "",
  "body": "  If and are any two square matrices of the same order, then show that     Let and are two matrices of the same order . Then, = sum of the diagonal elements of the matrix     "
},
{
  "id": "sec_second-examplesB-6",
  "level": "2",
  "url": "sec_second-examplesB.html#sec_second-examplesB-6",
  "type": "Example",
  "number": "2.4.5",
  "title": "",
  "body": "  Show that a real matrix is unitary if and only if it is orthogonal.    If is real matrix, then for to be unitary, we have -    is orthogonal. [or, , i.e., for a matrix to be orthogonal its transpose coincides with its inverse.]  Conversely, if is orthogonal, then    is unitary.   "
},
{
  "id": "sec_second-examplesB-7",
  "level": "2",
  "url": "sec_second-examplesB.html#sec_second-examplesB-7",
  "type": "Example",
  "number": "2.4.6",
  "title": "",
  "body": "  Show that under a unitary transformation, an orthonormal system of basis vectors is transformed into another orthonormal system.    We require,  here, Thus, or, must be an unitary matrix.   "
},
{
  "id": "sec_second-examplesB-8",
  "level": "2",
  "url": "sec_second-examplesB.html#sec_second-examplesB-8",
  "type": "Example",
  "number": "2.4.7",
  "title": "",
  "body": "  Show that a Hermitian matrix remains Hermitian under unitary transformation.    For unitary transformation, If to be Hermitian, then . Taking conjugate transpose of eqn. >, we get -  [ is an identity matrix.] This equality shows that Hermitian matrix remains Hermitian under unitary transformation.   "
},
{
  "id": "sec_second-examplesB-9",
  "level": "2",
  "url": "sec_second-examplesB.html#sec_second-examplesB-9",
  "type": "Example",
  "number": "2.4.8",
  "title": "",
  "body": "  Show that the length of a real vector is preserved under orthogonal transformation.    Let and are the real vectors of matrices and which is related as where is a transformation matrix. For an orthogonal transformation, we have - Since is considered to be an orthogonal. i.e., .  Therefore, from eqn. , we get - where,    Note: In case and are complex then the orthogonal conditions to be i.e., A is an unitary matrix. A real unitary matrix is an orthogonal matrix. shows that the norm of a real vector remains invariant under orthogonal transformation. i.e.,     "
},
{
  "id": "sec_second-examplesB-10",
  "level": "2",
  "url": "sec_second-examplesB.html#sec_second-examplesB-10",
  "type": "Example",
  "number": "2.4.9",
  "title": "",
  "body": "  Show that the eigen values of a Hermitian operator is real and eigen vectors belonging to different eigen values are orthogonal. Or, The eigen values of a Hermitian matrix are all real.    Let and be two eigen values and and be two eigen vectors of Hermitian matrix (operator) . Then premultiplying by to eqn. and to eqn. , respectively, we get - taking conjugate transpose of eqn. , we get - [for Hermitian matrix ] or, equating eqns. and , we get -    Case I: Let , then [ , as is a non - zero vector. i.e., is real for each .   Case II: Let . we have . which means eigen vectors for different eigen values of are orthogonal.   "
},
{
  "id": "sec_second-examplesB-11",
  "level": "2",
  "url": "sec_second-examplesB.html#sec_second-examplesB-11",
  "type": "Example",
  "number": "2.4.10",
  "title": "",
  "body": "  Show that the trace and determinant of a matrix is invarinat under similarity transformation.    Let and are two vectors relative to the basis of unprimed system and are represented by and relative to the basis of a primed system, so that where is transformation matrix. Suppose and are themselves related by the transformation matrix in the unprimed system, so that Now, from eqns. and , we have This implies that i.e., the matrix of transformation for the same two vectors in the coordinate system is related by and . Hence and are said to be related under similarity transformation. From eqn. , we have   after changing the sign for the places. i.e., trace is invarient under similarity transformation. Also, [ ] proved.   "
},
{
  "id": "sec_second-examplesB-12",
  "level": "2",
  "url": "sec_second-examplesB.html#sec_second-examplesB-12",
  "type": "Example",
  "number": "2.4.11",
  "title": "",
  "body": "  Show that diagonalizing matrix of a Hermitian matrix is unitary.    Let be a hermitian matrix and be its diagonalizing matrix, then where are the eigen values of $H$ and are all real.  Taking transposed conjugate on both sides of eqn. , we have which gives   R is a unitary matrix.   "
},
{
  "id": "prob-circuit1",
  "level": "2",
  "url": "sec_second-examplesB.html#prob-circuit1",
  "type": "Example",
  "number": "2.4.12",
  "title": "",
  "body": "  Use matrix method to find the voltage drop at resistor . In the given figure , , , , , , , and .    Consider are the currents flowing in the loops as shown in Now using Kirchhoff's voltage law , from loop 1, we have       From loop 2, From loop 3, Hence in the matrix form The determinant of the given matrix is      sign indicats that the current should be taken in opposite direction. Hence, the potential drop at volt.   "
},
{
  "id": "sec_second-eigen",
  "level": "1",
  "url": "sec_second-eigen.html",
  "type": "Section",
  "number": "2.5",
  "title": "Eigen Value Problem",
  "body": " Eigen Value Problem   When an operator acts on a vector then the resulting vector is different from . However there may exist certain non-zero vectors for which is just multiplied by a constant . i.e., is known as an eigen value problem.  Let's first understand the eigen function and eigen value . Suppose we differentiate with respect to , we get , then is not an eigen function, because is different function then Now, differentiate , we will get , again is not an eigenfunction. Howabout, if we differentiate , now we have , here a constant, is multiplied by the same function . Hence, is an eigen function and an yield constant, after the operation (differentiation) is known as an eigen value. Also, Here, the form of equation looks like , hence is an eigen function for the operator and is an eigen value for the function .  Now, or, where is a unit matrix, is an eigen vector or eigen function of an operator and the constant is an eigen value. when is represented by a square matrix, then the eigen values of a matrix are determined by an eqn. is called a secular or a characteristic equation.  Let us consider an example where a matrix, acts on a vector then the resulting vector would be In this case the vector is transformed into a new vector . The vector may gets elongated or shortened or rotated in the transformation process. For a given square matrix, there always exits special vector\/s which retain\/s their original direction, such vectors are called eigen vectors. The vector which scaled but will not change its direction is called an eigen vector and its scaled factor is known as eigen value. An eigenvector of a square matrix A is a non-zero vector X that, when multiplied by A, results in a scalar multiple of itself. That is, if , where is a scalar, then X is an eigenvector of A associated with the eigenvalue . For example, and then, Hence the vector remains the same with scalar multiplication 3. This scalar value is called eigen value, of the vector .      Eigenvectors help understand linear transformations easily. There are directions along which a linear transformation acts simply by stretching\/compressing and\/or flipping ; eigenvalues give the factors by which this compression occurs. Consider a matrix undergoing a physical transformation (e.g rotation). When this matrix is used to transform a given vector the result is . Now ask a question: Are there any vectors which does not change their direction under this transformation, but allow the vector magnitude to vary by scalar ? Such a question is of the form So, such special are called eigenvector(s) and the change in magnitude depends on the eigenvalue . Eigenvalues characterize important aspect of linear transformations, such as whether a system of linear equations has a unique solution or not. In many applications eigenvalues also describe physical propereties of a mathematical model. In Quantum Mechanics, the eigenvectors of operators which corresponds to observable quantities, like energy, position, etc., form a complete basis for the space of all possible states of the system that you're analysing. That is, any state you want can be written as a linear combination of these eigenvectors . Naturally, this makes to solve problems much easier, all we need is to find the coefficients in this linear combination for which there is a neat formula.   "
},
{
  "id": "sec_second-eigen-2-2",
  "level": "2",
  "url": "sec_second-eigen.html#sec_second-eigen-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "eigen function eigen value "
},
{
  "id": "fig-eigen",
  "level": "2",
  "url": "sec_second-eigen.html#fig-eigen",
  "type": "Figure",
  "number": "2.5.1",
  "title": "",
  "body": "   "
},
{
  "id": "sec_second-examplesC",
  "level": "1",
  "url": "sec_second-examplesC.html",
  "type": "Section",
  "number": "2.6",
  "title": "ExamplesC",
  "body": " ExamplesC    Show that there is only one eigen value for each eigen vector in a square matrix and also show that in such a matrix there may exist one or more eigen vectors for each eigen value.    Let us assume that there exist two distinct eigen values and corresponding to a given eigen vector of a square matrix . Then, we have on subtracting, we get - as, hence, This is a contradiction that is a non - zero vector. Hence corresponding to an eigen vector there is only one eigen value of the square matrix . Again, if be the eigen value of , then the corresponding characteristic (eigen) vector will be given by .  Let be any non - zero scalar, then . Thus, is also an eigen vector of corresponding to the same eigen value .      The eigen values of an orthogonal matrix have unit modulus.    Let be an orthogonal matrix. Hence . Now, from a characteristic equation, we have on taking the transpose on both sides of eqn. , we get - on multiplying eqns. and , we get - Since is an eigen vector, and consequently . Hence, we get - or,       The eigen values of a unitary matrix have unit modulus.    Let be a unitary matrix. Hence If be an eigen value of the matrix and is its eigen vector then from characteristic equation on taking the transpose conjugate of eqn. , we get - or, on multiplying eqns. and , we get - or, or,  Since is an eigen vector, it is a non - zero vector. Hence, . Therefore, frome eqn. , we get -  or,        Find the eigen values and eigen vector for the matrix,     To find the eigen value, the secular equation is given by That is, or,  Hence the eigen values are , and .  The eigen vector associated with is given by . i.e.,  This gives and or, Hence the required eigen vector corresponding to the eigen value , is by choosing .  Similarly, eigen vector for eigen value can also be found.      Find the eigen values and associated eigen vector for the matrix     We know that the secular equation is i.e., or, or, or, or, or, or, Now from zero method, satisfies the above equation. Hence we can write the above equation as or, or, Hence the eigen values are , and . The eigen vector associated with is given by , i.e., this gives or, and on solving these, we get -  On solving these we get - or, Hence the required eigen vector corresponding to the eigen value , is The eigen vector corresponding to the root, is given by or, This gives On solving these equations, we get - or, Hence an eigen vector corresponding to the eigen value, will be       Find the eigen values and eigen vectors of the given Hermitian matrix     The characteristic equation is , i.e.,   The eigen vector corresponding to eigen value is given by .  on solving these we get -  The eigen vector corresponding to eigen value is given by  on solving these we get - or, or, where may have any value. For , We have . Since the matrix is Hermitian, we have -  Normalized eigen vector corresponding to is       Find the eigen values and eigen vectors of     The characteristic equation is or,     The eigen vector corresponding to eigen value is given by , i.e., or, or,   Putting gives . Hence, similarly,       Prove that     Let, The characteristic equation is , which gives the eigen values  . The corresponding eigen vector associated with and are given by and by setting in eqns. and . Now a matrix that diagonalize is and Hence a diagonal matrix is    But,   or,       Examine whether the transformation is orthogonal and find its inverse.     This set of equations is equivalent to the single matrix equation i.e., For orthogonal matrix , or, Now, where . Hence, Thus the inverse transformation equation is  and       If the matrices and are Hermitian and matrices and are unitary then show that   is Hermitian,   is unitary,   is Hermitian.      We know that,if , then is unitary and if then is Hermitian.  Since is unitary, let for Hermitian matrix, we have , i.e.,   is Hermitian matrix.  Let taking conjugate, we have taking transpose, we get - Now,  is unitary.  By taking conjugate transpose of we can easily prove it as a Hermitian.      "
},
{
  "id": "sec_second-examplesC-2",
  "level": "2",
  "url": "sec_second-examplesC.html#sec_second-examplesC-2",
  "type": "Example",
  "number": "2.6.1",
  "title": "",
  "body": "  Show that there is only one eigen value for each eigen vector in a square matrix and also show that in such a matrix there may exist one or more eigen vectors for each eigen value.    Let us assume that there exist two distinct eigen values and corresponding to a given eigen vector of a square matrix . Then, we have on subtracting, we get - as, hence, This is a contradiction that is a non - zero vector. Hence corresponding to an eigen vector there is only one eigen value of the square matrix . Again, if be the eigen value of , then the corresponding characteristic (eigen) vector will be given by .  Let be any non - zero scalar, then . Thus, is also an eigen vector of corresponding to the same eigen value .   "
},
{
  "id": "sec_second-examplesC-3",
  "level": "2",
  "url": "sec_second-examplesC.html#sec_second-examplesC-3",
  "type": "Example",
  "number": "2.6.2",
  "title": "",
  "body": "  The eigen values of an orthogonal matrix have unit modulus.    Let be an orthogonal matrix. Hence . Now, from a characteristic equation, we have on taking the transpose on both sides of eqn. , we get - on multiplying eqns. and , we get - Since is an eigen vector, and consequently . Hence, we get - or,    "
},
{
  "id": "sec_second-examplesC-4",
  "level": "2",
  "url": "sec_second-examplesC.html#sec_second-examplesC-4",
  "type": "Example",
  "number": "2.6.3",
  "title": "",
  "body": "  The eigen values of a unitary matrix have unit modulus.    Let be a unitary matrix. Hence If be an eigen value of the matrix and is its eigen vector then from characteristic equation on taking the transpose conjugate of eqn. , we get - or, on multiplying eqns. and , we get - or, or,  Since is an eigen vector, it is a non - zero vector. Hence, . Therefore, frome eqn. , we get -  or,     "
},
{
  "id": "prob-eigvect1",
  "level": "2",
  "url": "sec_second-examplesC.html#prob-eigvect1",
  "type": "Example",
  "number": "2.6.4",
  "title": "",
  "body": "  Find the eigen values and eigen vector for the matrix,     To find the eigen value, the secular equation is given by That is, or,  Hence the eigen values are , and .  The eigen vector associated with is given by . i.e.,  This gives and or, Hence the required eigen vector corresponding to the eigen value , is by choosing .  Similarly, eigen vector for eigen value can also be found.   "
},
{
  "id": "prob-eigvect2",
  "level": "2",
  "url": "sec_second-examplesC.html#prob-eigvect2",
  "type": "Example",
  "number": "2.6.5",
  "title": "",
  "body": "  Find the eigen values and associated eigen vector for the matrix     We know that the secular equation is i.e., or, or, or, or, or, or, Now from zero method, satisfies the above equation. Hence we can write the above equation as or, or, Hence the eigen values are , and . The eigen vector associated with is given by , i.e., this gives or, and on solving these, we get -  On solving these we get - or, Hence the required eigen vector corresponding to the eigen value , is The eigen vector corresponding to the root, is given by or, This gives On solving these equations, we get - or, Hence an eigen vector corresponding to the eigen value, will be    "
},
{
  "id": "sec_second-examplesC-7",
  "level": "2",
  "url": "sec_second-examplesC.html#sec_second-examplesC-7",
  "type": "Example",
  "number": "2.6.6",
  "title": "",
  "body": "  Find the eigen values and eigen vectors of the given Hermitian matrix     The characteristic equation is , i.e.,   The eigen vector corresponding to eigen value is given by .  on solving these we get -  The eigen vector corresponding to eigen value is given by  on solving these we get - or, or, where may have any value. For , We have . Since the matrix is Hermitian, we have -  Normalized eigen vector corresponding to is    "
},
{
  "id": "sec_second-examplesC-8",
  "level": "2",
  "url": "sec_second-examplesC.html#sec_second-examplesC-8",
  "type": "Example",
  "number": "2.6.7",
  "title": "",
  "body": "  Find the eigen values and eigen vectors of     The characteristic equation is or,     The eigen vector corresponding to eigen value is given by , i.e., or, or,   Putting gives . Hence, similarly,    "
},
{
  "id": "sec_second-examplesC-9",
  "level": "2",
  "url": "sec_second-examplesC.html#sec_second-examplesC-9",
  "type": "Example",
  "number": "2.6.8",
  "title": "",
  "body": "  Prove that     Let, The characteristic equation is , which gives the eigen values  . The corresponding eigen vector associated with and are given by and by setting in eqns. and . Now a matrix that diagonalize is and Hence a diagonal matrix is    But,   or,    "
},
{
  "id": "sec_second-examplesC-10",
  "level": "2",
  "url": "sec_second-examplesC.html#sec_second-examplesC-10",
  "type": "Example",
  "number": "2.6.9",
  "title": "",
  "body": "  Examine whether the transformation is orthogonal and find its inverse.     This set of equations is equivalent to the single matrix equation i.e., For orthogonal matrix , or, Now, where . Hence, Thus the inverse transformation equation is  and    "
},
{
  "id": "sec_second-examplesC-11",
  "level": "2",
  "url": "sec_second-examplesC.html#sec_second-examplesC-11",
  "type": "Example",
  "number": "2.6.10",
  "title": "",
  "body": "  If the matrices and are Hermitian and matrices and are unitary then show that   is Hermitian,   is unitary,   is Hermitian.      We know that,if , then is unitary and if then is Hermitian.  Since is unitary, let for Hermitian matrix, we have , i.e.,   is Hermitian matrix.  Let taking conjugate, we have taking transpose, we get - Now,  is unitary.  By taking conjugate transpose of we can easily prove it as a Hermitian.     "
},
{
  "id": "sec_second-python",
  "level": "1",
  "url": "sec_second-python.html",
  "type": "Section",
  "number": "2.7",
  "title": "Python Code for Matrix",
  "body": " Python Code for Matrix    To solve problem like excute the following code in python shell    import numpy as np  A=np.array([[6,-3,0],[-3,12,5],[0,5,11]])  B= np.array([5,10,5])  I =np.linalg.solve(A,B)  I   array([ 1.45488029, 1.24309392, -0.11049724])       To solve problem like excute the following code in the python shell    import numpy as np  A=np.array([[3,1],[2,2]])  E,v=np.linalg.eig(A)  print('E-value:', E)  print('E-vector', v)   E-value: [4. 1.]  E-vector [[ 0.70710678 -0.4472136 ] [ 0.70710678 0.89442719]]            import numpy as np  A=np.array([[2,-1,1],[-1,2,-1],[1,-1,2]])  E,v=np.linalg.eig(A)  print('E-value:', E)  print('E-vector', v)    "
},
{
  "id": "sec_second-python-2",
  "level": "2",
  "url": "sec_second-python.html#sec_second-python-2",
  "type": "Problem",
  "number": "2.7.1",
  "title": "",
  "body": "  To solve problem like excute the following code in python shell    import numpy as np  A=np.array([[6,-3,0],[-3,12,5],[0,5,11]])  B= np.array([5,10,5])  I =np.linalg.solve(A,B)  I   array([ 1.45488029, 1.24309392, -0.11049724])    "
},
{
  "id": "sec_second-python-3",
  "level": "2",
  "url": "sec_second-python.html#sec_second-python-3",
  "type": "Problem",
  "number": "2.7.2",
  "title": "",
  "body": "  To solve problem like excute the following code in the python shell    import numpy as np  A=np.array([[3,1],[2,2]])  E,v=np.linalg.eig(A)  print('E-value:', E)  print('E-vector', v)   E-value: [4. 1.]  E-vector [[ 0.70710678 -0.4472136 ] [ 0.70710678 0.89442719]]    "
},
{
  "id": "sec_second-python-4",
  "level": "2",
  "url": "sec_second-python.html#sec_second-python-4",
  "type": "Problem",
  "number": "2.7.3",
  "title": "",
  "body": "       import numpy as np  A=np.array([[2,-1,1],[-1,2,-1],[1,-1,2]])  E,v=np.linalg.eig(A)  print('E-value:', E)  print('E-vector', v)   "
},
{
  "id": "ex_second",
  "level": "1",
  "url": "ex_second.html",
  "type": "Exercises",
  "number": "2.8",
  "title": "Exercise",
  "body": "  Exercise   Find the eigen values and eigen vectors of the given matrix    Here, for for for     Find such that         Find the matrix that diagonalize the matrix         Show that the matrix is orthogonal.   Diagonalizing matrix of a real symmetric matrix is orthogonal.  Verify that the adjoint of a diagonal matrix of order three is a diagonal matrix.   Find the inverse of        If and then show that .  Show that the eigen values of a unitary matrix have unit modulus.  Show that the eigen values of an orthogonal matrix have unit modulus.  Show that a product of unitary matrices is unitary.  "
},
{
  "id": "ex_second-2",
  "level": "2",
  "url": "ex_second.html#ex_second-2",
  "type": "Exercise",
  "number": "2.8.1",
  "title": "",
  "body": " Find the eigen values and eigen vectors of the given matrix    Here, for for for   "
},
{
  "id": "ex_second-3",
  "level": "2",
  "url": "ex_second.html#ex_second-3",
  "type": "Exercise",
  "number": "2.8.2",
  "title": "",
  "body": " Find such that       "
},
{
  "id": "ex_second-4",
  "level": "2",
  "url": "ex_second.html#ex_second-4",
  "type": "Exercise",
  "number": "2.8.3",
  "title": "",
  "body": " Find the matrix that diagonalize the matrix       "
},
{
  "id": "ex_second-5",
  "level": "2",
  "url": "ex_second.html#ex_second-5",
  "type": "Exercise",
  "number": "2.8.4",
  "title": "",
  "body": " Show that the matrix is orthogonal.  "
},
{
  "id": "ex_second-6",
  "level": "2",
  "url": "ex_second.html#ex_second-6",
  "type": "Exercise",
  "number": "2.8.5",
  "title": "",
  "body": "Diagonalizing matrix of a real symmetric matrix is orthogonal. "
},
{
  "id": "ex_second-7",
  "level": "2",
  "url": "ex_second.html#ex_second-7",
  "type": "Exercise",
  "number": "2.8.6",
  "title": "",
  "body": "Verify that the adjoint of a diagonal matrix of order three is a diagonal matrix. "
},
{
  "id": "ex_second-8",
  "level": "2",
  "url": "ex_second.html#ex_second-8",
  "type": "Exercise",
  "number": "2.8.7",
  "title": "",
  "body": " Find the inverse of       "
},
{
  "id": "ex_second-9",
  "level": "2",
  "url": "ex_second.html#ex_second-9",
  "type": "Exercise",
  "number": "2.8.8",
  "title": "",
  "body": "If and then show that . "
},
{
  "id": "ex_second-10",
  "level": "2",
  "url": "ex_second.html#ex_second-10",
  "type": "Exercise",
  "number": "2.8.9",
  "title": "",
  "body": "Show that the eigen values of a unitary matrix have unit modulus. "
},
{
  "id": "ex_second-11",
  "level": "2",
  "url": "ex_second.html#ex_second-11",
  "type": "Exercise",
  "number": "2.8.10",
  "title": "",
  "body": "Show that the eigen values of an orthogonal matrix have unit modulus. "
},
{
  "id": "ex_second-12",
  "level": "2",
  "url": "ex_second.html#ex_second-12",
  "type": "Exercise",
  "number": "2.8.11",
  "title": "",
  "body": "Show that a product of unitary matrices is unitary. "
},
{
  "id": "subsec-cont_cov",
  "level": "1",
  "url": "subsec-cont_cov.html",
  "type": "Subsection",
  "number": "3.1.1",
  "title": "Contravarient and Covarient Tensors",
  "body": " Contravarient and Covarient Tensors   Covariance and contravariance describe how the quantitative description of physical entities change with a change of basis. A covariant tensor is one that transforms in the same way as the coordinate system itself. This means that the components of the tensor change in a particular way when the coordinates of the system are changed. A contravariant tensor, on the other hand, transforms in the opposite way to the coordinate system. This means that the components of the tensor change in a particular way when the coordinates of the system are changed. For a contravariant vector to be basis independent, the components of the vector must contra-vary (opposite manner) with a change of basis to compensate. That is, the components must vary with the inverse transformation to that of the change of basis. These componets of vectors are said to be contravariant. Examples of vectors with contravariant componets include the position of an object (displacement) relative to an observer, or any derivative of position with respect to time including velocity, acceleration, and jerk. For a covariant vector to be basis-independent, the components of the vector must co-vary (same manner) with change of basis to remain representing the same vector. That is, the componets must vary by the same transformation as the change of basis. The componets of these vectors are said to be covariant. Examples of covariant vectors apear when taking a gradiant of a function.  If a set of components of a physical quantity in a coordinate system are related to the set of components of the same quantity in another coordinate system by the transformation equation. then they are called components of a contravarient vector or contravarient tensor of rank one. Multiply eqn. by , we get - or, we can also say, by replacing with .  Thus eqn. is an alternative to eqn. . where Kronecker delta, A set of quantities is called the components of a covarient vector or covarient tensor of rank one if = invarient (a scalar) = . Or, by changing with and with . Or,  or, also, are covarient tensor of rank one.  If quantities in a coordinate system are related to other quantities in another coordinates by the transformation eqn.  , The are the components of a second rank contravarient tensor. Similarly, and the are the components of a second rank covarient tensor. Also, and the are the components of a second rank mixed tensor. Again, and are a components of fifth - rank mixed tensor.   Note: The contravarient tensor is represented by components in the directions of coordinate increase whereas a covarient tensor is represented by components in the directions orthogonal to constant coordinate surfaces. In case of a cartesian coordinate system, the coordinate direction concides with the direction orthogonal to the constant surface so that the direction between the covarient and contravarient tensors vanishes. Hence we can not distinguish between them in cartesian systems. The covariance or contravariance of the tensor components is not intrinsic property of the entity but this distinction is due to the way in which the entity is related to coordinate system to which it is referred. It is to be noted that in a cartesian system That is, both these partial derivatives are equal to the direction cosines between - and - axes. Hence there is no difference between contravariant and covariant transformations in cartesian coordinates. In other coordinate system this is not true in general, thus the difference in covariant and contravariant is observed.  The tensor whose components transform like coordinate differential are called contravariant tensors. In this expression where are the coordinate differentials. For example:  In cartesian coordinates , suppose the velocity components are , ;  In oblique coordinats the velocity components are , ; and  In polar coordinates , the velocity components are , .  Since all these relations express the velocity of same particle, they are related to each other in the following way: or, also, Now, and, or, The components transforming like this equation are known as the contravariant tensor components of a vector and are characterised by coordinates differential transformation or transforms like the coordinate differentials.  The tensor whose components transform like the partial derivatives of the coordinate are called covariant tensors. In the expression where, are partial derivatives of the coordinates. If expresses a velocity function, then the components of velocity in system are and . The transformations of these resolved parts are given as   and or, The components which transform like this equation are called the covariant tensor components of a vector because the transformation is characterised by the partial derivatives of the coordinates or transforms like the derivatives of a scalar.    Discussion   Axis Transormation             In coordinate transformation component of a tensor changes either by a contravariant manner or a covariant manner. In      also also,  In coordinate transformation, vectors remains the same but its components change. Suppose we have two types of cartesian coordinates where the basis vectors are related as and , then and . For example, consider a vector in unprimed system then in the primed system, meaning if basis vectors increase the components decrease. Such type of transformation is called the contravariant transformation. Displacement, velocity, acceleration, etc. obey such type of transformation. Now consider a gradiant of scalar function Gradiant of a scalar function is a vector which represents the magnitude of maximum rate of change of the function. In previous case for a vector if then it's component and hence the component of the gradiant Here as basis vector increses component also has to increase by the same fasion otherwise the maximum rate of sclar changes differently in different coordinate systems. Such system where component increases as basis vector increases is called a covariant vector.  The has shown and are parallel projection of a vector and and are perpendicular projection of the same vector . Hence where and are a contravariant vectors, and where and are covariant vectors.   "
},
{
  "id": "subsec-cont_cov-2-5",
  "level": "2",
  "url": "subsec-cont_cov.html#subsec-cont_cov-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Note: "
},
{
  "id": "subsubsec-discus_trans-2",
  "level": "2",
  "url": "subsec-cont_cov.html#subsubsec-discus_trans-2",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": " Axis Transormation            "
},
{
  "id": "subsec-skew_tens",
  "level": "1",
  "url": "subsec-skew_tens.html",
  "type": "Subsection",
  "number": "3.1.2",
  "title": "Symmetric and Antisymmetric Tensors",
  "body": " Symmetric and Antisymmetric Tensors  A tensor whose two contravariant or covariant indices can be interchanged without affecting the value of the tensor, then it is called symmetric tensor in these indices. If then the tensor is symmetric contravariant tensor in the indices and . Again, if then the tensor is called skew symmetric contravariant tensor contravariant tensor . The same is true for covariant tensor covariant tensor . The symmetric or antisymmetric is defined for a pair of contravariant or covariant indices. However, the Kronecker delta which is a mixed tensor for one contravariant and covariant indices is symmetric in its indices.  "
},
{
  "id": "subsec-coord_trans",
  "level": "1",
  "url": "subsec-coord_trans.html",
  "type": "Subsection",
  "number": "3.1.3",
  "title": "Transformation of Coordinates",
  "body": " Transformation of Coordinates      Let and are the coordinates of point P in prime and unprimed systems, respectively as shown in . Now, if the frame rotates about axis, then their relations are given as   and   If we replace by , by , by and by , and or, and or, If we take rotation in three dimensional space, then the transformation of the coordinates can be written as where [for ], the direction cosines of prime components w.r.t. unprimed. or, simply, and when a suffix is repeated in expressions like and , they denote the sum of three quantities by giving a dummy index of values 1, 2, and 3. Hence,  where , , are directions cosines of in system.  "
},
{
  "id": "fig-fig331",
  "level": "2",
  "url": "subsec-coord_trans.html#fig-fig331",
  "type": "Figure",
  "number": "3.1.2",
  "title": "",
  "body": "   "
},
{
  "id": "subsec-dummy",
  "level": "1",
  "url": "subsec-dummy.html",
  "type": "Subsection",
  "number": "3.2.1",
  "title": "Dummy Suffix",
  "body": " Dummy Suffix  If suffix occurs twice in a term, then that suffix is called dummy suffix. For example, is a dummy suffix in . Also a dummy suffix can be replace by another dummy suffix i.e., .  "
},
{
  "id": "subsec-metric",
  "level": "1",
  "url": "subsec-metric.html",
  "type": "Subsection",
  "number": "3.2.2",
  "title": "The line element and a metric tensor",
  "body": " The line element and a metric tensor  The length of arc is obtained by in rectangular coordinates and it is in curvilinear coordinates. we define the line element $ds$ in the - dimensional space to be given by the quadratic form called metric. The quantities are called metric coefficients and are symmetric, i.e., . If and , then the coordinate system is orthogonal. In this case . The generalized form of element of length between the points and is given by , where are functions of , and . (symmetric) Let, then,  where, Now,    where also in a tensor, and .   "
},
{
  "id": "sec_third-examplesA",
  "level": "1",
  "url": "sec_third-examplesA.html",
  "type": "Section",
  "number": "3.3",
  "title": "ExamplesA",
  "body": " ExamplesA    Show that a scalar is invariant under any coordinate transformation.    We have the transformation equations for contravariant and covariant tensor as and now scalar is a tensor of rank zero, so set , we get from above equations, i.e., scalar is invarient under any coordinate transformation.      show that in a cartensian coordinate system, the contravarient and covarient components of a vector are identical.    Let and are the contravarient and covarient components of a vector respectively in a cartesian coordinates, then they are related by . Here, and in cartesian coordinate . Therefore, in orthogonal system. For a cartesian system [if ] and [if ]. Hence, and , i. e., covarient component is similar to contravarient components.      Show that velocity and acceleration are contravarient vectors and that of the gradient of a scalar field is a covarient vector.      Let the transformation eqn. as Dividing by , we get - But, and  Velocity is a contravarient vector contravarient vector because is a transformation rule for contravarient tensor. Again, differentiating , w. r. t. , we get -  hence acceleration is also a contravarient vector.   Note: The coordinates in are the coordinates of a particle in motion, while the coefficients only denotes a relation between two coordinate systems, which is independent of time.    Let be a scalar field. The functional form of scalar field is same under coordinate transformations, hence now under frame rotation  or, i.e., the shows the transformation rule for covarient tensor. If we suppose, and then which is not the transformation rule. Hence the gradient of a scalar field is not a contravarient vector.        Show that the contraction of the outer product of the tensors and is an invariant.    Since and are tensors, we have, and therefore, the outer product is by contraction, put , we have       If is symmetric tensor in a reference system then it is symmetric in all other reference system.    Let is a components of symmetric tensor then . If be the components in barred system, then on interchanging the indices , and , , we have        The symmetric or antisymmetric property may not be true for the interchange of contravariant and covariant index in all system, i.e., .    If , then it is not necessary that . Suppose is a component of a mixed tensor in unbarred system such that . Then in barred system, we have - Interchange and , we get - from eqns. and ,  Hence, Thus the symmetric propeties are not preserved in contravariant and covariant of different systems.      Show that is not a tensor even though is a covarient tensor of rank one.    we have - Differentiating w. r. t. we get -   because of the presence of second term on the right does not transform like a tensor.      Prove that the contraction of the tensor is a scalar or invarient.    We have put , then Thus which means must be an invarient.      Show that the inner product of any rank tensors is a tensor of rank two.    Let us consider and are any tensors of rank two, then - and multiplying them, we get - set we get -    which is a second rank tensor.      Show that the inner product of a tensor and a rank tensor is a tensor of rank three.    Let us consider and are any tensors of rank two and three, respectively then - and multiplying, we get - put ,   i.e., is a tensor of rank three.      If a tensor is a symmetric w.r.t. indices and in one coordinate system then show that it remains symmetric w.r.t. and in any other coordinate systems.    Since only indices and are involved, we shall prove that the results for . If is symmetric then and hence remains symmetric in the coordinate system. If is skew - symmetric, then and hence remains skew - symmetric in system.      Prove that is a mixed tensor of rank two.    If is a mixed tensor it must transform as  Therefore, is a mixed tensor of rank two.      Prove .           Prove .    In both and are dummy and they are to be summed over from 1 to 3. As only if and for . So only terms for will contribute and thus     "
},
{
  "id": "sec_third-examplesA-2",
  "level": "2",
  "url": "sec_third-examplesA.html#sec_third-examplesA-2",
  "type": "Example",
  "number": "3.3.1",
  "title": "",
  "body": "  Show that a scalar is invariant under any coordinate transformation.    We have the transformation equations for contravariant and covariant tensor as and now scalar is a tensor of rank zero, so set , we get from above equations, i.e., scalar is invarient under any coordinate transformation.   "
},
{
  "id": "sec_third-examplesA-3",
  "level": "2",
  "url": "sec_third-examplesA.html#sec_third-examplesA-3",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": "  show that in a cartensian coordinate system, the contravarient and covarient components of a vector are identical.    Let and are the contravarient and covarient components of a vector respectively in a cartesian coordinates, then they are related by . Here, and in cartesian coordinate . Therefore, in orthogonal system. For a cartesian system [if ] and [if ]. Hence, and , i. e., covarient component is similar to contravarient components.   "
},
{
  "id": "sec_third-examplesA-4",
  "level": "2",
  "url": "sec_third-examplesA.html#sec_third-examplesA-4",
  "type": "Example",
  "number": "3.3.3",
  "title": "",
  "body": "  Show that velocity and acceleration are contravarient vectors and that of the gradient of a scalar field is a covarient vector.      Let the transformation eqn. as Dividing by , we get - But, and  Velocity is a contravarient vector contravarient vector because is a transformation rule for contravarient tensor. Again, differentiating , w. r. t. , we get -  hence acceleration is also a contravarient vector.   Note: The coordinates in are the coordinates of a particle in motion, while the coefficients only denotes a relation between two coordinate systems, which is independent of time.    Let be a scalar field. The functional form of scalar field is same under coordinate transformations, hence now under frame rotation  or, i.e., the shows the transformation rule for covarient tensor. If we suppose, and then which is not the transformation rule. Hence the gradient of a scalar field is not a contravarient vector.     "
},
{
  "id": "sec_third-examplesA-5",
  "level": "2",
  "url": "sec_third-examplesA.html#sec_third-examplesA-5",
  "type": "Example",
  "number": "3.3.4",
  "title": "",
  "body": "  Show that the contraction of the outer product of the tensors and is an invariant.    Since and are tensors, we have, and therefore, the outer product is by contraction, put , we have    "
},
{
  "id": "sec_third-examplesA-6",
  "level": "2",
  "url": "sec_third-examplesA.html#sec_third-examplesA-6",
  "type": "Example",
  "number": "3.3.5",
  "title": "",
  "body": "  If is symmetric tensor in a reference system then it is symmetric in all other reference system.    Let is a components of symmetric tensor then . If be the components in barred system, then on interchanging the indices , and , , we have     "
},
{
  "id": "sec_third-examplesA-7",
  "level": "2",
  "url": "sec_third-examplesA.html#sec_third-examplesA-7",
  "type": "Example",
  "number": "3.3.6",
  "title": "",
  "body": "  The symmetric or antisymmetric property may not be true for the interchange of contravariant and covariant index in all system, i.e., .    If , then it is not necessary that . Suppose is a component of a mixed tensor in unbarred system such that . Then in barred system, we have - Interchange and , we get - from eqns. and ,  Hence, Thus the symmetric propeties are not preserved in contravariant and covariant of different systems.   "
},
{
  "id": "sec_third-examplesA-8",
  "level": "2",
  "url": "sec_third-examplesA.html#sec_third-examplesA-8",
  "type": "Example",
  "number": "3.3.7",
  "title": "",
  "body": "  Show that is not a tensor even though is a covarient tensor of rank one.    we have - Differentiating w. r. t. we get -   because of the presence of second term on the right does not transform like a tensor.   "
},
{
  "id": "sec_third-examplesA-9",
  "level": "2",
  "url": "sec_third-examplesA.html#sec_third-examplesA-9",
  "type": "Example",
  "number": "3.3.8",
  "title": "",
  "body": "  Prove that the contraction of the tensor is a scalar or invarient.    We have put , then Thus which means must be an invarient.   "
},
{
  "id": "sec_third-examplesA-10",
  "level": "2",
  "url": "sec_third-examplesA.html#sec_third-examplesA-10",
  "type": "Example",
  "number": "3.3.9",
  "title": "",
  "body": "  Show that the inner product of any rank tensors is a tensor of rank two.    Let us consider and are any tensors of rank two, then - and multiplying them, we get - set we get -    which is a second rank tensor.   "
},
{
  "id": "sec_third-examplesA-11",
  "level": "2",
  "url": "sec_third-examplesA.html#sec_third-examplesA-11",
  "type": "Example",
  "number": "3.3.10",
  "title": "",
  "body": "  Show that the inner product of a tensor and a rank tensor is a tensor of rank three.    Let us consider and are any tensors of rank two and three, respectively then - and multiplying, we get - put ,   i.e., is a tensor of rank three.   "
},
{
  "id": "sec_third-examplesA-12",
  "level": "2",
  "url": "sec_third-examplesA.html#sec_third-examplesA-12",
  "type": "Example",
  "number": "3.3.11",
  "title": "",
  "body": "  If a tensor is a symmetric w.r.t. indices and in one coordinate system then show that it remains symmetric w.r.t. and in any other coordinate systems.    Since only indices and are involved, we shall prove that the results for . If is symmetric then and hence remains symmetric in the coordinate system. If is skew - symmetric, then and hence remains skew - symmetric in system.   "
},
{
  "id": "sec_third-examplesA-13",
  "level": "2",
  "url": "sec_third-examplesA.html#sec_third-examplesA-13",
  "type": "Example",
  "number": "3.3.12",
  "title": "",
  "body": "  Prove that is a mixed tensor of rank two.    If is a mixed tensor it must transform as  Therefore, is a mixed tensor of rank two.   "
},
{
  "id": "sec_third-examplesA-14",
  "level": "2",
  "url": "sec_third-examplesA.html#sec_third-examplesA-14",
  "type": "Example",
  "number": "3.3.13",
  "title": "",
  "body": "  Prove .        "
},
{
  "id": "sec_third-examplesA-15",
  "level": "2",
  "url": "sec_third-examplesA.html#sec_third-examplesA-15",
  "type": "Example",
  "number": "3.3.14",
  "title": "",
  "body": "  Prove .    In both and are dummy and they are to be summed over from 1 to 3. As only if and for . So only terms for will contribute and thus    "
},
{
  "id": "subsec-stress_tensor",
  "level": "1",
  "url": "subsec-stress_tensor.html",
  "type": "Subsection",
  "number": "3.4.1",
  "title": "The Stress Tensor",
  "body": " The Stress Tensor  The stress tensor is defined as the internal force per unit area acting on a deformed body. The stress may be directed normally or tangentially to the surfaces on which force act. If the deforming force act normally to a given area of an elastic medium, they produce pure elongations and in that case the stresses are called “ tensile or normal stresses” and if deforming forces act tangentially 'shearing stresses' are produced.      Consider a rectangular parallelopiped of volume , as shown in . Let a deforming force acts on it so that Let a component acts normal to the face $ABGF$ of area , then the stress acting normal to this face, is defined as similarly, stress normal to the face OABC is defined as and the stress normal to the face OEFA is where , and . Thus , and are normal stresses acting on a volume element. Now, consider the tangential forces acting on the face , i.e., forces acting along and directions, then the shearing stress in - direction acting on a plane perpendicular to the - direction, may be defined by when the force is along - direction acting on the same face , the shearing stress is defined by similarly, the tangential or shearing stresses acting on the face OABC perpendicular to the - direction along and directions are given by and and those acting on the face OEFA perpendicular to the - direction along and directions are given by  Hence total stress may be completely specified by matrix form as Since the shearing stresses on mutually perpendicular planes are always equal, we have - because when volume element to be in static equilibrium, the moment of force along - direction would be Therefore which is given by the faces ABGF and DEFG. Thus stress matrix has only six independent components for its complete specification. or, Now, since the force is definitely a vector and if is a vector, then will certainly be a tensor of rank two. Since, Area is a vector, it must transform like vector, therefore, Now, which is a vector transformation law. Thus, stress matrix eqn. is a tensor of rank two and is called a 'stress tensor'.  "
},
{
  "id": "fig-mit2",
  "level": "2",
  "url": "subsec-stress_tensor.html#fig-mit2",
  "type": "Figure",
  "number": "3.4.2",
  "title": "",
  "body": "   "
},
{
  "id": "ex_third",
  "level": "1",
  "url": "ex_third.html",
  "type": "Exercises",
  "number": "3.5",
  "title": "Exercise",
  "body": "  Exercise  Show that the symmetric or antisymmetric property of a tensor is conserved under a transformation of coordinates.  Show that the quantities transform like the components of a tensor.  Prove that .  If is an antisymmetric tensor, Show that .  If is a skewsymmetric tensor of rank two, then prove that .  Show that if a physical quantity has no component in one coordinate system, then it does not have a component in any other coordinate systems.  How many independent commponents are there in an antisymmetric tensor of rank two?  Show that the direct product of a rank tensor and a rank tensor is a tensor of rank two.  Prove that the sum of diagonal components of a second-rank tensor is an invariant.  State the transformation properties of tensors and . Obtain the transformation properties of . Explain your result.  Contract and provide direct product of two tensors and . What will be the rank of the contracted tensor and the direct product?  Show that any tensor of rank 2 can be expressed as the sum of a symmetric and an antisymmetric tensors of rank 2.  Any tensor of rank 2, may be expressed as     is any arbitrary contravarient vector. It is known that is a covariant vector. Show that is a covariant tensor of rank 2.  Using the inner product of a tensor and applying contraction principle obtain the length L of a tensor .  take direct product of and .   "
},
{
  "id": "ex_third-2",
  "level": "2",
  "url": "ex_third.html#ex_third-2",
  "type": "Exercise",
  "number": "3.5.1",
  "title": "",
  "body": "Show that the symmetric or antisymmetric property of a tensor is conserved under a transformation of coordinates. "
},
{
  "id": "ex_third-3",
  "level": "2",
  "url": "ex_third.html#ex_third-3",
  "type": "Exercise",
  "number": "3.5.2",
  "title": "",
  "body": "Show that the quantities transform like the components of a tensor. "
},
{
  "id": "ex_third-4",
  "level": "2",
  "url": "ex_third.html#ex_third-4",
  "type": "Exercise",
  "number": "3.5.3",
  "title": "",
  "body": "Prove that . "
},
{
  "id": "ex_third-5",
  "level": "2",
  "url": "ex_third.html#ex_third-5",
  "type": "Exercise",
  "number": "3.5.4",
  "title": "",
  "body": "If is an antisymmetric tensor, Show that . "
},
{
  "id": "ex_third-6",
  "level": "2",
  "url": "ex_third.html#ex_third-6",
  "type": "Exercise",
  "number": "3.5.5",
  "title": "",
  "body": "If is a skewsymmetric tensor of rank two, then prove that . "
},
{
  "id": "ex_third-7",
  "level": "2",
  "url": "ex_third.html#ex_third-7",
  "type": "Exercise",
  "number": "3.5.6",
  "title": "",
  "body": "Show that if a physical quantity has no component in one coordinate system, then it does not have a component in any other coordinate systems. "
},
{
  "id": "ex_third-8",
  "level": "2",
  "url": "ex_third.html#ex_third-8",
  "type": "Exercise",
  "number": "3.5.7",
  "title": "",
  "body": "How many independent commponents are there in an antisymmetric tensor of rank two? "
},
{
  "id": "ex_third-9",
  "level": "2",
  "url": "ex_third.html#ex_third-9",
  "type": "Exercise",
  "number": "3.5.8",
  "title": "",
  "body": "Show that the direct product of a rank tensor and a rank tensor is a tensor of rank two. "
},
{
  "id": "ex_third-10",
  "level": "2",
  "url": "ex_third.html#ex_third-10",
  "type": "Exercise",
  "number": "3.5.9",
  "title": "",
  "body": "Prove that the sum of diagonal components of a second-rank tensor is an invariant. "
},
{
  "id": "ex_third-11",
  "level": "2",
  "url": "ex_third.html#ex_third-11",
  "type": "Exercise",
  "number": "3.5.10",
  "title": "",
  "body": "State the transformation properties of tensors and . Obtain the transformation properties of . Explain your result. "
},
{
  "id": "ex_third-12",
  "level": "2",
  "url": "ex_third.html#ex_third-12",
  "type": "Exercise",
  "number": "3.5.11",
  "title": "",
  "body": "Contract and provide direct product of two tensors and . What will be the rank of the contracted tensor and the direct product? "
},
{
  "id": "ex_third-13",
  "level": "2",
  "url": "ex_third.html#ex_third-13",
  "type": "Exercise",
  "number": "3.5.12",
  "title": "",
  "body": "Show that any tensor of rank 2 can be expressed as the sum of a symmetric and an antisymmetric tensors of rank 2.  Any tensor of rank 2, may be expressed as   "
},
{
  "id": "ex_third-14",
  "level": "2",
  "url": "ex_third.html#ex_third-14",
  "type": "Exercise",
  "number": "3.5.13",
  "title": "",
  "body": " is any arbitrary contravarient vector. It is known that is a covariant vector. Show that is a covariant tensor of rank 2. "
},
{
  "id": "ex_third-15",
  "level": "2",
  "url": "ex_third.html#ex_third-15",
  "type": "Exercise",
  "number": "3.5.14",
  "title": "",
  "body": "Using the inner product of a tensor and applying contraction principle obtain the length L of a tensor .  take direct product of and .  "
},
{
  "id": "subsec-first_order-diff",
  "level": "1",
  "url": "subsec-first_order-diff.html",
  "type": "Subsection",
  "number": "4.1.1",
  "title": "First Order Linear Differential Equation",
  "body": " First Order Linear Differential Equation  The first order linear differential equation is obtained by putting in the standard form of linear equation , i.e., or, where and are functions of or constants. To find its solution, first consider the homogeneous equation by setting .  integrating, we get - where is an arbitrary constant of integration. or, where . Let,  Differentiate eqn. w.r.t. 'x', we get - or, or, or, Now multiplying eqn. by , we get - which by using eqn. , becomes Integrating, we get - where is an arbitrary constant. This is the required solution and the factor is known as integration factor (I.F.) . Therefore the solution of first order linear differential equation can be easily found by the formula Equation may be written as i.e. the general solution of differential equation consists of two parts. where and also .  Now differentiating with respect to 'x', we have or, or, which shows that is the solution of , again, differentiating w.r.t. 'x', we have - or,  which shows that is the solution of . Hence, the first part of the solution of differential equation is the solution of its homogeneous equation and is known as Complementry Function . Second part is free from any arbitrary constant and is known as Particular Integral .  Complete Solution = Complementry Function + Particular Integral . That is,   "
},
{
  "id": "subsec-first_order-diff-2",
  "level": "2",
  "url": "subsec-first_order-diff.html#subsec-first_order-diff-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integration factor (I.F.) "
},
{
  "id": "subsec-first_order-diff-3",
  "level": "2",
  "url": "subsec-first_order-diff.html#subsec-first_order-diff-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Complementry Function Particular Integral Complete Solution = Complementry Function + Particular Integral "
},
{
  "id": "subsec-second_order-diff",
  "level": "1",
  "url": "subsec-second_order-diff.html",
  "type": "Subsection",
  "number": "4.1.2",
  "title": "Second Order Linear Differential Equations",
  "body": " Second Order Linear Differential Equations   Putting in the standard form of linear differential equation gives the second order linear differential equation. or, where , and are functions of or constants.  The method for finding the solution of linear differential equations is depends on the nature of and . If and are constants then the differential equation is said to be second order linear differential equation with constant coefficients. But if and are functions of then the differential equation is said to be differential equation with variable coefficients.    Linear Equations with Constant Coefficients  The general form of linear differential equation of second order is where and are constants and is a function of or constant. In the operator form, where,     Let be the trial solution of of eqn. with m being root of the equation, then it satisfies the equation. or, from eqn. , or,  or, or, It is called an Auxiliary Equation (A.E.) . Which is quadratic in m (or D), roots of which can be appeared by three ways. Viz. real and unequal, real and equal, or a complex pair. Also it should be noted that if and are two linearly independent solution of the corresponding homogenous equation then . The condition for and to be linearly independent is This determinant is called Wornskian of and .   Case I. Roots are real and unequal: If and are the roots of an A.E. then a C.F. is given by The wronskian for and is since . The wronskian . Hence and are linearly independent.   Case II. Roots are real and equal: If (say), then C.F. is . why?  If then from case I, . Where C is only one constant in this solution. But the order of given equation is two the solution must contain two constants in order to satisfy the given equation. Hence we have to seek its solution by another way. Let's write equation in the form put then, or, or, Thus, or, which is an inhomogenous first order linear differential equation. whose integrating factor is given by Hence, the solution of this differential equation is given by equation      Case III. Roots are imaginary pair. If the roots are then the solution will be     where C and are arbitrary constants.    There are various methods to find the particular integral of a differential equation, here we discuss some of the easy methods.      General Method of Finding the Particular Integral of Any Function   or, or, or, which is a first order linear differential equation. Its solution is  Particular Integral can also be obtained by inspection method which will be discussed in examples given below. However, there may be developed a general method for solving the differential equation directly, called the successive integration method. Let the equation in the form If and are the roots of A.E., then eqn. can be written as put, so that or, Its solution is  from eqn. , we have or, or, where,     Linear Equations with Variable Coefficients  The linear equation of the form or, is called a linear differential equation with variable coefficient if and are function of only.  In fact, there is no general method to solve such differential equations. However, we discuss one artificial but elegent method to solve such type of equations. This method is known as Method of Variation of Parameters . Lagrange developed it. It provides the complete solution of a linear equation whose complementary function is known.  Let the equation is The C.F. of which is given as where and are two linearly independent solution of the correspnding homogenous eqn. i.e.,  clearly equation will not satisfy the given equation . As , so we should consider the constants and as unknown parameters which are the functions of , then be a complete solution of the given equation . Hence equation must satisfy the equation . Now, If we set, by assuming and to be the arbitrary constants for complementary part of the equation. Then, and Therefore, from given eqn. , we have - or, from eqns. and , we have the first two terms equal to zero. Solving eqns. and , we get - multiplying top equation by and bottom equation by we get-  and  where is known as the Wronskian for solutions and . Which does not equal to zero if and are two linearly independent solution of eqn. .  Integrating eqn. , we get - Substituting and in equation , we get -  Note: There are no specific method to solve the differential equation with variable coefficients but it can be solved by many method according to the type of eqution. If the equation containing decreasing power of x then put so that equation can be converted into variable coefficient to constant coefficient. Here are some rules which help us to find the complementary function of the given differential equation. When C.F. is not easily obtained we should use Power Series method to solve such equation.  Assume   be a known integral of C.F. if .   be a known integral of C.F. if .   be a known integral of C.F. if .   be a known integral of C.F. if .   be a known integral of C.F. if .  and put be the solution of corresponding homogeneous differential equation. Where is any parameter depends on .     "
},
{
  "id": "subsubsec-leqconst_coeff-3-1-1",
  "level": "2",
  "url": "subsec-second_order-diff.html#subsubsec-leqconst_coeff-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Auxiliary Equation (A.E.) Wornskian "
},
{
  "id": "subsubsec-leqconst_coeff-3-1-5",
  "level": "2",
  "url": "subsec-second_order-diff.html#subsubsec-leqconst_coeff-3-1-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Case III. Roots are imaginary pair. "
},
{
  "id": "subsubsec-var_coef-3",
  "level": "2",
  "url": "subsec-second_order-diff.html#subsubsec-var_coef-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Method of Variation of Parameters "
},
{
  "id": "subsubsec-var_coef-5",
  "level": "2",
  "url": "subsec-second_order-diff.html#subsubsec-var_coef-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Note: Power Series "
},
{
  "id": "sec_fourth-examplesA",
  "level": "1",
  "url": "sec_fourth-examplesA.html",
  "type": "Section",
  "number": "4.2",
  "title": "ExamplesA",
  "body": " ExamplesA    The current in a circuit, containing a resistance , an induction , and a constant e.m.f. , at time , is given by . Obtain a suitable approximation to when is very small.    From a circuit , we have potential drop across resistance and voltage induced at inductance . Using Kirchoff's Voltage law,   or, or, Its solution is  when then, or, . Therefore, expression becomes but, when        Find the solution for the equation of motion when a mass attached to a spring with spring constant is pulled and then released, as shown in figure     The motion executed by a spring is simple harmonic motion, therefore, (where is the displacement of mass at any time, .) or, or, where . The eqn. is the equation of motion. The general solution of eqn. is then If be the period of motion, then .   equating on both sides, we get -  i.e., or,        Solve     A.E. is or, .   Therefore, Now, [using eqns. , and ]  changing to , we have putting these values in eqn. , we get -           Solve       or,   Let,  , and, . Therefore, is a P.I. of eqn. , becouse it satisfies the equation. It is a general solution of eqn. .   The solution of eqn. by successive integration method. The roots of A.E. are real and equal, i.e., . Hence, from eqn.  where, using . Hence,  and or,           Python Code for Differential Equation    For equation  the Python code is    from sympy.interactive import printing  printing.init_printing(use_latex=True)  from sympy import *  import sympy as sp  t=sp.Symbol('t', real=True)  I=sp.Function('I')(t)  R, L, E=sp.symbols('R, L, E', real=True)  diffeq=Eq(I.diff(t)+R\/L*I,E\/L)  display(diffeq)  dsolve(diffeq,I)  import numpy as np  from scipy.integrate import odeint  import matplotlib.pyplot as plt  E=5  R=5  L=0.02  Io=0  t=np.arange(0,0.025,0.001)  def f(I,t,E,L,R):  dIdt =-(R\/L)*I+(E\/L)  return dIdt  Is=odeint(f,Io,t,args=(E,L,R))  plt.plot(t,Is, '-')  plt.plot(t,Is, 'ro')  plt.title('DI(t)+RI(t)\/L=E\/L')  plt.xlabel('t(s)')  plt.ylabel('I(A)')  plt.show()  Since is a constant, the general solution of this equation is .        from sympy.interactive import printing  printing.init_printing(use_latex=True)  from sympy import *  import sympy as sp  t,y =sp.symbols('t,y')  a=sp.Symbol('a',positive=True)  y=sp.Function('y')(t)  diffeq=Eq(y.diff(t,2)+a**2*y,0)  display(diffeq)  dsolve(diffeq,y)  import numpy as np  from scipy.integrate import odeint  import matplotlib.pyplot as plt  def f(u,t): return (u[1], -5*u[0])  yo=[0,4]  xs=np.arange(0,5,0.1)  us=odeint(f,yo,xs)  ys=us[:,0]  plt.plot(xs,ys, '-')  plt.plot(xs,ys, 'ro')  plt.title('(D**2+5)y=0')  plt.xlabel('t values')  plt.ylabel('y values')  plt.show()                   Solve .    The equation in standard form is Here, and . Since, , we have is a known integral of C.F. So we find C.F. of the given differential eqn. by putting in or, or,  Hence, [ ]. Therefore the C.F. of eqn. is , where, , and . Now, let be the solution of eqn. . Where, and Therefore the complete solution is       Solve .    The equation in standard form is Since and we assume and to be the two independent solutions of eqn. . Hence we have . Therefore the complete solution of eqn. is [see eqn. ]          Solve      This is the equation with decreasing power of x. Hence put and . We have or, A.E. is or,  where and also The standard form of eqn. is Now the complete solution of eqn. is  If then and hence, or, also,           Solve     It has type auxiliary equaion, hence be the known integral of C.F. Select be the solutioin of corresponding differential equation. (read page for details). We may get a homogeneous equation like which gives, This corresponds to Use Wronskian to find the complete solution of the differential equation.    "
},
{
  "id": "sec_fourth-examplesA-2",
  "level": "2",
  "url": "sec_fourth-examplesA.html#sec_fourth-examplesA-2",
  "type": "Example",
  "number": "4.2.1",
  "title": "",
  "body": "  The current in a circuit, containing a resistance , an induction , and a constant e.m.f. , at time , is given by . Obtain a suitable approximation to when is very small.    From a circuit , we have potential drop across resistance and voltage induced at inductance . Using Kirchoff's Voltage law,   or, or, Its solution is  when then, or, . Therefore, expression becomes but, when     "
},
{
  "id": "sec_fourth-examplesA-3",
  "level": "2",
  "url": "sec_fourth-examplesA.html#sec_fourth-examplesA-3",
  "type": "Example",
  "number": "4.2.2",
  "title": "",
  "body": "  Find the solution for the equation of motion when a mass attached to a spring with spring constant is pulled and then released, as shown in figure     The motion executed by a spring is simple harmonic motion, therefore, (where is the displacement of mass at any time, .) or, or, where . The eqn. is the equation of motion. The general solution of eqn. is then If be the period of motion, then .   equating on both sides, we get -  i.e., or,     "
},
{
  "id": "sec_fourth-examplesA-4",
  "level": "2",
  "url": "sec_fourth-examplesA.html#sec_fourth-examplesA-4",
  "type": "Example",
  "number": "4.2.3",
  "title": "",
  "body": "  Solve     A.E. is or, .   Therefore, Now, [using eqns. , and ]  changing to , we have putting these values in eqn. , we get -        "
},
{
  "id": "sec_fourth-examplesA-5",
  "level": "2",
  "url": "sec_fourth-examplesA.html#sec_fourth-examplesA-5",
  "type": "Example",
  "number": "4.2.4",
  "title": "",
  "body": "  Solve       or,   Let,  , and, . Therefore, is a P.I. of eqn. , becouse it satisfies the equation. It is a general solution of eqn. .   The solution of eqn. by successive integration method. The roots of A.E. are real and equal, i.e., . Hence, from eqn.  where, using . Hence,  and or,         "
},
{
  "id": "sec_fourth-examplesA-6-2-1-1",
  "level": "2",
  "url": "sec_fourth-examplesA.html#sec_fourth-examplesA-6-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "the Python code is "
},
{
  "id": "sec_fourth-examplesA-7",
  "level": "2",
  "url": "sec_fourth-examplesA.html#sec_fourth-examplesA-7",
  "type": "Example",
  "number": "4.2.5",
  "title": "",
  "body": "  Solve .    The equation in standard form is Here, and . Since, , we have is a known integral of C.F. So we find C.F. of the given differential eqn. by putting in or, or,  Hence, [ ]. Therefore the C.F. of eqn. is , where, , and . Now, let be the solution of eqn. . Where, and Therefore the complete solution is    "
},
{
  "id": "sec_fourth-examplesA-8",
  "level": "2",
  "url": "sec_fourth-examplesA.html#sec_fourth-examplesA-8",
  "type": "Example",
  "number": "4.2.6",
  "title": "",
  "body": "  Solve .    The equation in standard form is Since and we assume and to be the two independent solutions of eqn. . Hence we have . Therefore the complete solution of eqn. is [see eqn. ]       "
},
{
  "id": "sec_fourth-examplesA-9",
  "level": "2",
  "url": "sec_fourth-examplesA.html#sec_fourth-examplesA-9",
  "type": "Example",
  "number": "4.2.7",
  "title": "",
  "body": "  Solve      This is the equation with decreasing power of x. Hence put and . We have or, A.E. is or,  where and also The standard form of eqn. is Now the complete solution of eqn. is  If then and hence, or, also,        "
},
{
  "id": "sec_fourth-examplesA-10",
  "level": "2",
  "url": "sec_fourth-examplesA.html#sec_fourth-examplesA-10",
  "type": "Example",
  "number": "4.2.8",
  "title": "",
  "body": "  Solve     It has type auxiliary equaion, hence be the known integral of C.F. Select be the solutioin of corresponding differential equation. (read page for details). We may get a homogeneous equation like which gives, This corresponds to Use Wronskian to find the complete solution of the differential equation.   "
},
{
  "id": "subsec-reg_sing",
  "level": "1",
  "url": "subsec-reg_sing.html",
  "type": "Subsection",
  "number": "4.3.1",
  "title": "When <span class=\"process-math\">\\(x=0\\)<\/span> is a Regular Singular Point of the Equation",
  "body": " When is a Regular Singular Point of the Equation  In this case, the solution is and on substituting of and in the given differential equation we get the identity. The index will be determined by the quadratic equation obtained by equating the coefficient of lowest power of to zero. The quadratic equation in is called the Indicial equation . Thus, we will get two values of . The series solution of equation will depend upon the nature of the roots of the indicial equation.   Case I. When roots ( ) are distinct and not differing by an integer, then the complete solution is  Case II. When roots are equal ( ), then  Case III. When roots are distinct and differ by an integer, then there arise two possibilities  If some of the coefficients of y series become infinite at , then replace by . The complete solution is then [on taking , we obtain a solution which is a constant multiple of that obtained for .]  When the coefficient of y series does not become infinite for any , then the complete solution is     "
},
{
  "id": "subsec-reg_sing-2",
  "level": "2",
  "url": "subsec-reg_sing.html#subsec-reg_sing-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Indicial equation "
},
{
  "id": "sec_fourth-examplesB",
  "level": "1",
  "url": "sec_fourth-examplesB.html",
  "type": "Section",
  "number": "4.4",
  "title": "Examples B",
  "body": " Examples B    Solve      This equation has a regular singularity at . Hence we assume the solution in the form or, and Substituting these values in eqn. , we get -  or,  or,  or, Equating the coefficient of lowest power of (i.e., the coefficient of ) to zero. We get the indicial equation. or, or, or, and the difference of roots is not an integer.  Equating the coefficient of next higher power of (i.e., ) to zero, we get or, or, or, or, for , for  i.e., the series solution does not contain the coefficient .  Again, equating the coefficient of general power of (i.e., ) to zero, we get the recursion relation.  for  [from equation ] or, and so on. Or,  for , [from eqn. ] or,  and so on. From eqn. , we have  The complete solution of eqn. is        Solve      The equation has is a regular singular point. Let be the solution of eqn. . Since eqn. satisfies the eqn. we have  or, or, or, Equating the coefficient of lowest power of (i.e., ) to zero, we get - Equating the coefficient of to zero, we get - for  hence, Again, equating the coefficient of to zero, we get - [ at .] Equating the coefficient of to zero, we get - or, for  for  also, for  also, for  similarly, and so on.  Hence, from eqn. , we get -  To get the first solution, let in eqn. , To get the second independent solution, differentiate eqn. w.r.t. 'm', we get - Let then. or,         Hence the general solution is given by           Solve      Let be the solution of eqn. . With the help of eqn. , eqn. becomes-  or, or, or, Equating the coefficient of to zero, we get - Equating the coefficient of to zero, we get - Equating the coefficient of to zero, we get - or, or, or, or, Hence, from eqn. , we have  putting in eqn. , we get - Coefficient of etc. in eqn. becomes infinite when . If any one coefficient of the series becomes infinite at , we should put to overcome this difficulty.  Hence, put in eqn. , we get -  On differentiating eqn. w.r.t. 'k', we get -  on replacing by -1, we get -  or,         Solve      Let be the solution of eqn. . Therefore from eqn. , we have -  or,  or, or, Equating the coefficient of to zero, we get - or,  Equating the coefficient of to zero, we get - or, or, for , may or may not be zero, also . for  . Equating the coefficient of to zero, we get - or, or, or, for ,  At ,   Hence, for , for , At , At , At , At , Hence, for ,  Here, the solution is a part of solution which is not possible because expansion of and are two different solutions of the same equation and hence must be zero in solution . Thus the complete solution is      "
},
{
  "id": "sec_fourth-examplesB-2",
  "level": "2",
  "url": "sec_fourth-examplesB.html#sec_fourth-examplesB-2",
  "type": "Example",
  "number": "4.4.1",
  "title": "",
  "body": "  Solve      This equation has a regular singularity at . Hence we assume the solution in the form or, and Substituting these values in eqn. , we get -  or,  or,  or, Equating the coefficient of lowest power of (i.e., the coefficient of ) to zero. We get the indicial equation. or, or, or, and the difference of roots is not an integer.  Equating the coefficient of next higher power of (i.e., ) to zero, we get or, or, or, or, for , for  i.e., the series solution does not contain the coefficient .  Again, equating the coefficient of general power of (i.e., ) to zero, we get the recursion relation.  for  [from equation ] or, and so on. Or,  for , [from eqn. ] or,  and so on. From eqn. , we have  The complete solution of eqn. is     "
},
{
  "id": "sec_fourth-examplesB-3",
  "level": "2",
  "url": "sec_fourth-examplesB.html#sec_fourth-examplesB-3",
  "type": "Example",
  "number": "4.4.2",
  "title": "",
  "body": "  Solve      The equation has is a regular singular point. Let be the solution of eqn. . Since eqn. satisfies the eqn. we have  or, or, or, Equating the coefficient of lowest power of (i.e., ) to zero, we get - Equating the coefficient of to zero, we get - for  hence, Again, equating the coefficient of to zero, we get - [ at .] Equating the coefficient of to zero, we get - or, for  for  also, for  also, for  similarly, and so on.  Hence, from eqn. , we get -  To get the first solution, let in eqn. , To get the second independent solution, differentiate eqn. w.r.t. 'm', we get - Let then. or,         Hence the general solution is given by        "
},
{
  "id": "sec_fourth-examplesB-4",
  "level": "2",
  "url": "sec_fourth-examplesB.html#sec_fourth-examplesB-4",
  "type": "Example",
  "number": "4.4.3",
  "title": "",
  "body": "  Solve      Let be the solution of eqn. . With the help of eqn. , eqn. becomes-  or, or, or, Equating the coefficient of to zero, we get - Equating the coefficient of to zero, we get - Equating the coefficient of to zero, we get - or, or, or, or, Hence, from eqn. , we have  putting in eqn. , we get - Coefficient of etc. in eqn. becomes infinite when . If any one coefficient of the series becomes infinite at , we should put to overcome this difficulty.  Hence, put in eqn. , we get -  On differentiating eqn. w.r.t. 'k', we get -  on replacing by -1, we get -  or,      "
},
{
  "id": "sec_fourth-examplesB-5",
  "level": "2",
  "url": "sec_fourth-examplesB.html#sec_fourth-examplesB-5",
  "type": "Example",
  "number": "4.4.4",
  "title": "",
  "body": "  Solve      Let be the solution of eqn. . Therefore from eqn. , we have -  or,  or, or, Equating the coefficient of to zero, we get - or,  Equating the coefficient of to zero, we get - or, or, for , may or may not be zero, also . for  . Equating the coefficient of to zero, we get - or, or, or, for ,  At ,   Hence, for , for , At , At , At , At , Hence, for ,  Here, the solution is a part of solution which is not possible because expansion of and are two different solutions of the same equation and hence must be zero in solution . Thus the complete solution is     "
},
{
  "id": "subsec-Legnd_eq",
  "level": "1",
  "url": "subsec-Legnd_eq.html",
  "type": "Subsection",
  "number": "4.5.1",
  "title": "Legendre’s Differential Equation",
  "body": " Legendre's Differential Equation   The differential equation is known as Legendre's differential equation. Such type of equation appears on solving Laplace's equation ( ) associated with spherical harmonics. In equation , is any number (integer or fraction). This equation can be solved in series of ascending or descending power of . It has no singularity at so its solution can be obtained as a power series developed about this point.  Let the series solution in descending powers of be so that and Substituting these in equation , we get-  or,  or,  It is an identity and therefore, the coefficients of various poweers of must vanish. Now equating to zero, the coefficient of , the highest powers of , we have for . Since the coefficient of first term of the series can not be zero. Therefore . Hence the indicial equation is or, or, or, or, Next equating the coefficient of to zero, we get - or, or, or, but, for . Hence, Again, equating the coefficient of general term to zero, we get the recurrence relation. now,      or, or,    Case I  For, ,  so that  and so on. Also Hence the series becomes      which is a solution of equation .  If we choose the arbitrary constant where is a positive integer, then this solution of Legender's equation is known as Legender's Polynomials or Legender's Function of First Kind, , i.e.,    This is a terminating series. When is even, and the last term is when is odd, and the last term is  is that solution of Legender's equation which is equal to unity when .    Case II  For, we have from equation  so that  and so on. Also , Hence,     This gives an another solution of equation . If we choose, where is a positive integer, then this solution of equation is known as Legender's Function of Second Kind, , i.e.,  This is a non - terminating series. The most general solution of Legender's Equation is where and are arbitrary constants.    Note:    If the infinite series solution of a given differential equation is reduced into a finite series, then the solution is called the polynomial. \"Polynomial is a finite series that consists of a finite number of terms. Each term in a polynomial is a product of a coefficient, a variable raised to a power, and there is a finite number of such terms in the polynomial expression. The degree of the polynomial determines the highest power of the variable present in the expression, and the number of terms is directly related to the degree\". For a positive integer , equation is a finite series (polynomial) and equation is an infinite series. For a nigative integer , equation is an infinite series and equation is a polynomial. The general solution is a linear combination of a finite series and an infinite series.    If we want to solve the Legender's equation in a series of ascending powers of , we may proceed by taking .    The expansion of can also be written as     where for even and for odd. In particular,      putting, etc., we get - . other terms are vanished. other terms are vanished. etc.    From expression , we deduce that   Now extended the upper limit from to since the extra terms from to do not contribute anything because each term in the series vanishes for and integrals. Also, from Binomial expansion of  This is the Rodrigue's Formula for Legender's Polynomial. The plot for Legender's polynomial is shown in .       Rodrigue's Formula      Let then, or, or, Now, differentiating equation , times using Leibnitz theorem, we get -  or,  or, If we put then equation becomes or, which is Legendre's equation and is one of its solution. where C is a constant. But, so that  when , All the other terms disappear as is a factor in every term except first.     Therefore, when , equation gives Hence, from equation . from equation . This is the Rodrigue's Formula for Legendre Polynomial.     Legendre Polynomials   Legendre's Polynomial    The Rodrigue's formula for Legendre's Polynomials is If , If , If ,   similarly,     where,    Note: we can evaluate by expanding from Binomial theorem.  However,  The last term contains either or . or, or, or,    Python Code:  import numpy as np  from scipy.special import eval_legendre  import matplotlib.pyplot as plt  from scipy.linalg import det  N = range(0, 6)  eval_legendre(N, 0)  X = np.linspace(-1, 1)  for n in range(0, 6):  y = eval_legendre(n, X)  plt.plot(X, y, label=r'$P_{}(x)$'.format(n))  plt.title(\"Legendre Polynomials\")  plt.xlabel(\"x\")  plt.ylabel(r'$P_n(x)$')  plt.legend(loc='lower right')  plt.show()     Generating Function for  generating function  Legendre Polynomial is the coefficient of in , i.e.,    We have           But,   and   Hence, replacing by these values to collect the coefficient of , we get -         Thus the function is defined as generating function of .     Some Important Results     We know that  substituting for in the above equation, we get -  or, or,  Equating the coefficients of on both sides, we get -      putting in the generating function of , we get - or, equating the coefficient of , we get - i.e.,      we have  now replacing by and by . equating the coefficients of , we get -     Alternative: We know that  Thus         Recurrence Relations for  Recurrence relations are the relationship among the polynomials of different orders and their derivatives of differential orders.     Solution: We know that Differentiating it with respect to , we get - or, or, Equating the coefficient of on both sides, we get- or,  Note: If , then this result reduces to      Solution: We know that Differentiating equation with respect to , we get - or, Differentiating equation with respect to , we get - or, Dividing equation by equation , we get - or, equating the coefficients of from both sides, we get -      solution: From relation I, we have - Differentiating this with respect to , we get - or, or, from relation II. or,        Solution: From relation I., we have replacing by (n+1), we get- Differentiating this with respect to , we get -  from relation II. Or, or,      Solution: From relation III, we have From relation II, we have multiplying equation by and subtracting from equation , we get -      Solution: From relation I, we have Replacing by , we get - or, or, or,        Orthogonality of Legendre's Polynomials  Legendre's polynomiala are a set of orthogonal functions in the interval . where here is a Kronecker delta symbol and and are positive integer.    is a solution of  is a solution of Multiplying equation by 'z' and equation by 'y' and then subtracte, we get -  or, Integrating with respect to from -1 to +1, we get - or, or, since satisfies equation and satisfies equation . If , then equation has zero on both its sides and hence we can not get the value of integral for from this equation. To calculate the integral in such a case we may proceed from generating function as . Squaring both sides, we get - Integrating with respect to from -1 to +1, we get - or,       Equating the coefficient of on both sides, we get - Now, from equation and equation , we have where      The Associated Legendre's Polynomials   Associated Legendre's Polynomials Laplace's equation in spherical polar coordinates is given by . Or, [see Laplacian in spherical curvilinear coordinates ] or, or, On solving the potential problems some solution yields to relate the Legendre's Polynomials called associated Legendre's polynomials. Let be the solution of equation . Then or, Dividing by on both sides, we get - In equation Left Hand Side (LHS) is a function of only and Right Hand Side (RHS) is a function of only hence such an equation must be equal to some constant, say . Assume be the solution of equation , then or, or, or, or,   LHS is a function of only and RHS is a function of only which is possible only if they are equal to some constant. From equation , we have or, [Azimuthal equation] From equation  or, or, [Theta equation]  To solve equation , introduce a new variable so that and . Therefore, from equation , we have or, or, or,  Equation is known as associated Legendre's differential equation. If , equation becomes Legendre's differential equation. If and then equation is Legendre's differential equation in the cartesian system. From equation , we get - or, or, [Radial Equation].   "
},
{
  "id": "subsubsec-legn_rodrg-3",
  "level": "2",
  "url": "subsec-Legnd_eq.html#subsubsec-legn_rodrg-3",
  "type": "Proof",
  "number": "4.5.1.1.1",
  "title": "",
  "body": " Let then, or, or, Now, differentiating equation , times using Leibnitz theorem, we get -  or,  or, If we put then equation becomes or, which is Legendre's equation and is one of its solution. where C is a constant. But, so that  when , All the other terms disappear as is a factor in every term except first.     Therefore, when , equation gives Hence, from equation . from equation . This is the Rodrigue's Formula for Legendre Polynomial.  "
},
{
  "id": "fig-fig43",
  "level": "2",
  "url": "subsec-Legnd_eq.html#fig-fig43",
  "type": "Figure",
  "number": "4.5.1",
  "title": "",
  "body": " Legendre's Polynomial   "
},
{
  "id": "subsubsec-genrt_legn-4",
  "level": "2",
  "url": "subsec-Legnd_eq.html#subsubsec-genrt_legn-4",
  "type": "Proof",
  "number": "4.5.1.3.1",
  "title": "",
  "body": " We have           But,   and   Hence, replacing by these values to collect the coefficient of , we get -         Thus the function is defined as generating function of .  "
},
{
  "id": "subsubsec-Legn_import-2-3-2",
  "level": "2",
  "url": "subsec-Legnd_eq.html#subsubsec-Legn_import-2-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Alternative: "
},
{
  "id": "subsubsec-legn_recurrnc-3-1-1",
  "level": "2",
  "url": "subsec-Legnd_eq.html#subsubsec-legn_recurrnc-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Note: "
},
{
  "id": "subsubsec-legn_orth-3",
  "level": "2",
  "url": "subsec-Legnd_eq.html#subsubsec-legn_orth-3",
  "type": "Proof",
  "number": "4.5.1.6.1",
  "title": "",
  "body": "  is a solution of  is a solution of Multiplying equation by 'z' and equation by 'y' and then subtracte, we get -  or, Integrating with respect to from -1 to +1, we get - or, or, since satisfies equation and satisfies equation . If , then equation has zero on both its sides and hence we can not get the value of integral for from this equation. To calculate the integral in such a case we may proceed from generating function as . Squaring both sides, we get - Integrating with respect to from -1 to +1, we get - or,       Equating the coefficient of on both sides, we get - Now, from equation and equation , we have where   "
},
{
  "id": "sec_fourth-examplesC",
  "level": "1",
  "url": "sec_fourth-examplesC.html",
  "type": "Section",
  "number": "4.6",
  "title": "Examples C",
  "body": " Examples C   Legendre's Function    Express in terms of Legendre's Polynomials.    Let    Equating the coefficients of like powers of , we have    Putting these values in eqn. , we get -       Show that and hence prove that            We know that where, Thus   Now,  if , we have or,   if , we have or,         Assuming that a polynomial of degree can be written as show that      Multiplying both sides by , we get -  or,           From the values of Legendre's polynomials, prove that     Let    equating the coefficients of like powers of , we get -   and Putting these values in eqn. , we get -       Using Rodrigue's formula, prove that if .      On integrating by parts we get -  Integrating we have Integrating times, we get -       "
},
{
  "id": "sec_fourth-examplesC-2-2",
  "level": "2",
  "url": "sec_fourth-examplesC.html#sec_fourth-examplesC-2-2",
  "type": "Example",
  "number": "4.6.1",
  "title": "",
  "body": "  Express in terms of Legendre's Polynomials.    Let    Equating the coefficients of like powers of , we have    Putting these values in eqn. , we get -    "
},
{
  "id": "sec_fourth-examplesC-2-3",
  "level": "2",
  "url": "sec_fourth-examplesC.html#sec_fourth-examplesC-2-3",
  "type": "Example",
  "number": "4.6.2",
  "title": "",
  "body": "  Show that and hence prove that            We know that where, Thus   Now,  if , we have or,   if , we have or,      "
},
{
  "id": "sec_fourth-examplesC-2-4",
  "level": "2",
  "url": "sec_fourth-examplesC.html#sec_fourth-examplesC-2-4",
  "type": "Example",
  "number": "4.6.3",
  "title": "",
  "body": "  Assuming that a polynomial of degree can be written as show that      Multiplying both sides by , we get -  or,        "
},
{
  "id": "sec_fourth-examplesC-2-5",
  "level": "2",
  "url": "sec_fourth-examplesC.html#sec_fourth-examplesC-2-5",
  "type": "Example",
  "number": "4.6.4",
  "title": "",
  "body": "  From the values of Legendre's polynomials, prove that     Let    equating the coefficients of like powers of , we get -   and Putting these values in eqn. , we get -    "
},
{
  "id": "sec_fourth-examplesC-2-6",
  "level": "2",
  "url": "sec_fourth-examplesC.html#sec_fourth-examplesC-2-6",
  "type": "Example",
  "number": "4.6.5",
  "title": "",
  "body": "  Using Rodrigue's formula, prove that if .      On integrating by parts we get -  Integrating we have Integrating times, we get -     "
},
{
  "id": "subsec-bessl_fn",
  "level": "1",
  "url": "subsec-bessl_fn.html",
  "type": "Subsection",
  "number": "4.7.1",
  "title": "Bessel’s Functions, <span class=\"process-math\">\\(J_{n}(x)\\)<\/span>",
  "body": " Bessel's Functions,   The Bessel's function is If  or, If , The graph of these functions are damped oscillatory with a varying period, as shown in figure .   Bessel's Function      Generating Function for   , the Bessel's function of first kind is the coefficient of in the expansion of    we know that   and  Multiplying equations and , we get - Replacing by , we get the coefficient of as      The coefficient of is obtained by putting , so we have   From equations and , we have This is the reason that is said to be generating function of Bessel's functions. The generating function also express the trigonometric functions as expansions involving Bessel's functions. Bessel generating function For this purpose put in the generating function. That is, or, or,     Equating real and imaginary parts, we get - and The above two series and are known as Jacobian series. Replacing by , we have and     Python Code:  from scipy.special import j1  import numpy as np  import scipy as sp  import matplotlib.pyplot as plt  x = np.linspace(0, 20,100)  for n in range(4):  y = sp.special.jn(n,x)  plt.plot(x, y, label=r'$J_{}(x)$'.format(n))  plt.title(\"Bessel's Function\")  plt.xlabel(\"x\")  plt.ylabel(r'$J_m(x)$')  plt.legend(loc='lower right')  plt.show()     Integral Represntation of      We know that  and Multiplying equation by and equation by and integrating between limits 0 to , we get -   Again,   Adding equations and , we get -  where is any integer.  The Kronecker delta for ;     If n= 0, we have  for .        Recurrence Relations for        we know that Differentiating with respect to , we get - or, or,   To change limits put , so that     ,      From equation of relation 1, we have               We know that [from relation 1.] [from relation 2.] Adding these, we get - or,          We know that - [from relation 1.] [from relation 2.] Subtracting these, we get - or,          We know that [from relation 1.] Multiplying by , we get - or, or,          We know that [from relation 2.] Multiplying by , we get - or, or,        Orthogonality of Bessel's Functions   Where and are the roots of . Provided .   We know that the Bessel's equation is satisfied by . Now put and in equation , we have  and  and Substituting these values in equation , we get - Similarly by putting and in equation , we have Multiplying equation by and equation by and then subtracting, we get - or, Integrating equation w. r. t. 'x' between the limits 0 to 1, we get -  putting the values of , and , in equation , , we get -   since and are the roots of , we have - and , putting these values in equation , we get - Hence,     "
},
{
  "id": "fig-fig44",
  "level": "2",
  "url": "subsec-bessl_fn.html#fig-fig44",
  "type": "Figure",
  "number": "4.7.1",
  "title": "",
  "body": " Bessel's Function   "
},
{
  "id": "subsubsec-bessl_genfn-3",
  "level": "2",
  "url": "subsec-bessl_fn.html#subsubsec-bessl_genfn-3",
  "type": "Proof",
  "number": "4.7.1.1.1",
  "title": "",
  "body": " we know that   and  Multiplying equations and , we get - Replacing by , we get the coefficient of as      The coefficient of is obtained by putting , so we have   From equations and , we have This is the reason that is said to be generating function of Bessel's functions. The generating function also express the trigonometric functions as expansions involving Bessel's functions. Bessel generating function For this purpose put in the generating function. That is, or, or,     Equating real and imaginary parts, we get - and The above two series and are known as Jacobian series. Replacing by , we have and   "
},
{
  "id": "subsubsec-bessl_intg-3",
  "level": "2",
  "url": "subsec-bessl_fn.html#subsubsec-bessl_intg-3",
  "type": "Proof",
  "number": "4.7.1.2.1",
  "title": "",
  "body": " We know that  and Multiplying equation by and equation by and integrating between limits 0 to , we get -   Again,   Adding equations and , we get -  where is any integer.  The Kronecker delta for ;     If n= 0, we have  for .     "
},
{
  "id": "subsubsec-bessl_recr-2-1-2",
  "level": "2",
  "url": "subsec-bessl_fn.html#subsubsec-bessl_recr-2-1-2",
  "type": "Proof",
  "number": "1.1",
  "title": "",
  "body": " we know that Differentiating with respect to , we get - or, or,   To change limits put , so that    "
},
{
  "id": "subsubsec-bessl_recr-2-2-2",
  "level": "2",
  "url": "subsec-bessl_fn.html#subsubsec-bessl_recr-2-2-2",
  "type": "Proof",
  "number": "2.1",
  "title": "",
  "body": " From equation of relation 1, we have        "
},
{
  "id": "subsubsec-bessl_recr-2-3-2",
  "level": "2",
  "url": "subsec-bessl_fn.html#subsubsec-bessl_recr-2-3-2",
  "type": "Proof",
  "number": "3.1",
  "title": "",
  "body": " We know that [from relation 1.] [from relation 2.] Adding these, we get - or,   "
},
{
  "id": "subsubsec-bessl_recr-2-4-2",
  "level": "2",
  "url": "subsec-bessl_fn.html#subsubsec-bessl_recr-2-4-2",
  "type": "Proof",
  "number": "4.1",
  "title": "",
  "body": " We know that - [from relation 1.] [from relation 2.] Subtracting these, we get - or,   "
},
{
  "id": "subsubsec-bessl_recr-2-5-2",
  "level": "2",
  "url": "subsec-bessl_fn.html#subsubsec-bessl_recr-2-5-2",
  "type": "Proof",
  "number": "5.1",
  "title": "",
  "body": " We know that [from relation 1.] Multiplying by , we get - or, or,   "
},
{
  "id": "subsubsec-bessl_recr-2-6-2",
  "level": "2",
  "url": "subsec-bessl_fn.html#subsubsec-bessl_recr-2-6-2",
  "type": "Proof",
  "number": "6.1",
  "title": "",
  "body": " We know that [from relation 2.] Multiplying by , we get - or, or,   "
},
{
  "id": "subsubsec-bessl_orth-3",
  "level": "2",
  "url": "subsec-bessl_fn.html#subsubsec-bessl_orth-3",
  "type": "Proof",
  "number": "4.7.1.4.1",
  "title": "",
  "body": " We know that the Bessel's equation is satisfied by . Now put and in equation , we have  and  and Substituting these values in equation , we get - Similarly by putting and in equation , we have Multiplying equation by and equation by and then subtracting, we get - or, Integrating equation w. r. t. 'x' between the limits 0 to 1, we get -  putting the values of , and , in equation , , we get -   since and are the roots of , we have - and , putting these values in equation , we get - Hence,   "
},
{
  "id": "sec_fourth-examplesD",
  "level": "1",
  "url": "sec_fourth-examplesD.html",
  "type": "Section",
  "number": "4.8",
  "title": "Examples D",
  "body": " Examples D   Bessels's Function    Prove that where is a positive integer.    We have   Since, . Hence, for , we have putting , where is a positive integer, we have       Prove that      and         We know that       putting in eqn. , we get -    since, , the Gamma function  and .    Againg putting in equation , we get -     [since ].        Find the values of .    We have the recurrence relation (4) from , putting , we get - or,  Similarly on putting in eqn. , we get - We can also prove it by putting in the eqn. of previous problem 2.      Prove that .    By recurrnce relation 2 from , putting in eqn. , we have or, By recurrnce relation 4 from , putting , we have  putting the value of in eqn. , we get -        Using recurrence relations, show that .    By the recurrnce relation 3 from , differentiating, we get- replacing by in eqn. and by in eqn. , we get - or, and or, putting the values of and in eqn. , we get - or,       Prove that .    By recurrence relation 2 from , Differentiating, we get - Putting, , or, By recurrence relation 1, putting  or, putting the value of in eqn. , we get - putting , in eqn. , we get - or, putting in eqn. , we have        Prove that .                Prove that and     We know that - and Differentiating eqn. w. r. t. , we get - again, differentiating eqn. w. r. t. , we get -  putting in eqn. , we get - similarly, differentiating eqn. twice and putting , we get -      "
},
{
  "id": "sec_fourth-examplesD-2-2",
  "level": "2",
  "url": "sec_fourth-examplesD.html#sec_fourth-examplesD-2-2",
  "type": "Example",
  "number": "4.8.1",
  "title": "",
  "body": "  Prove that where is a positive integer.    We have   Since, . Hence, for , we have putting , where is a positive integer, we have     "
},
{
  "id": "sec_fourth-examplesD-2-3",
  "level": "2",
  "url": "sec_fourth-examplesD.html#sec_fourth-examplesD-2-3",
  "type": "Example",
  "number": "4.8.2",
  "title": "",
  "body": " Prove that      and         We know that       putting in eqn. , we get -    since, , the Gamma function  and .    Againg putting in equation , we get -     [since ].     "
},
{
  "id": "sec_fourth-examplesD-2-4",
  "level": "2",
  "url": "sec_fourth-examplesD.html#sec_fourth-examplesD-2-4",
  "type": "Example",
  "number": "4.8.3",
  "title": "",
  "body": "  Find the values of .    We have the recurrence relation (4) from , putting , we get - or,  Similarly on putting in eqn. , we get - We can also prove it by putting in the eqn. of previous problem 2.   "
},
{
  "id": "sec_fourth-examplesD-2-5",
  "level": "2",
  "url": "sec_fourth-examplesD.html#sec_fourth-examplesD-2-5",
  "type": "Example",
  "number": "4.8.4",
  "title": "",
  "body": "  Prove that .    By recurrnce relation 2 from , putting in eqn. , we have or, By recurrnce relation 4 from , putting , we have  putting the value of in eqn. , we get -     "
},
{
  "id": "sec_fourth-examplesD-2-6",
  "level": "2",
  "url": "sec_fourth-examplesD.html#sec_fourth-examplesD-2-6",
  "type": "Example",
  "number": "4.8.5",
  "title": "",
  "body": "  Using recurrence relations, show that .    By the recurrnce relation 3 from , differentiating, we get- replacing by in eqn. and by in eqn. , we get - or, and or, putting the values of and in eqn. , we get - or,    "
},
{
  "id": "sec_fourth-examplesD-2-7",
  "level": "2",
  "url": "sec_fourth-examplesD.html#sec_fourth-examplesD-2-7",
  "type": "Example",
  "number": "4.8.6",
  "title": "",
  "body": "  Prove that .    By recurrence relation 2 from , Differentiating, we get - Putting, , or, By recurrence relation 1, putting  or, putting the value of in eqn. , we get - putting , in eqn. , we get - or, putting in eqn. , we have     "
},
{
  "id": "sec_fourth-examplesD-2-8",
  "level": "2",
  "url": "sec_fourth-examplesD.html#sec_fourth-examplesD-2-8",
  "type": "Example",
  "number": "4.8.7",
  "title": "",
  "body": "  Prove that .             "
},
{
  "id": "sec_fourth-examplesD-2-9",
  "level": "2",
  "url": "sec_fourth-examplesD.html#sec_fourth-examplesD-2-9",
  "type": "Example",
  "number": "4.8.8",
  "title": "",
  "body": "  Prove that and     We know that - and Differentiating eqn. w. r. t. , we get - again, differentiating eqn. w. r. t. , we get -  putting in eqn. , we get - similarly, differentiating eqn. twice and putting , we get -    "
},
{
  "id": "subsec-hermit-pol",
  "level": "1",
  "url": "subsec-hermit-pol.html",
  "type": "Subsection",
  "number": "4.9.1",
  "title": "Hermite Polynomials <span class=\"process-math\">\\(H_{n}(x)\\)<\/span>",
  "body": " Hermite Polynomials    hermite's Polynomial    If we choose and is an even integer then the series is terminating which gives the even polynomial, known as Hermite Polynomial, . The term containing in equation is   The term containing is      and so on. Therefore, the Hermite Polynomial is defined as   Similarly, equation reduces to a polynomial if is an odd integer. Let's choose then the term containing in the equation is     and so on. Hence, we have the Hermite polynomia for odd integer is   From equations and , we get - where is even and where is odd. For particulars, we have  and so on. In general where The graph of these functions is shown in figure .    Pythone Code:  import math  import numpy as np  import matplotlib.pyplot as plt  from scipy.special import hermite  def HERMITE(X,N):  HER = hermite(N)  sn = HER(X)  return sn  x = np.linspace(-2.5,2.5,1000)  for n in np.arange(0,5,1):  y = HERMITE(x,n)  plt.plot(x, y, label=r'$H_{}(x)$'.format(n))  plt.title(\"Hermite Polynomials\")  plt.xlabel(\"x\")  plt.ylabel(r'$H_n(x)$')  plt.legend(loc='lower right')  plt.show()    Generating Function for   generating function Hermite polynomial is the coefficient of in the expansion of i.e.,    We have     for fixed value of , (as in the general term of ) the coefficient of is obtained by putting or,  Now, we know that since , we must have or, . Thus, if is even varies from 0 to and when is odd varies from 0 to . Hence, the coefficient of  Hence, The function is thus said to be the generating function of Hermite polynomials.     Rodrigue's Formula for Hermite Polynomials   is the Rodrigue's formula for Hermite polynomials.   We know that Differentiating times w. r. t. , we get - But, we have and or, similarly, and so on. In general,  Hence from equation , we have  [from equation ] This is differential form of Hermite polynomial, which gives and so on.     Recurrence Relation for Hermite Polynomials        We know that Differentiating w. r. to , we get - or, or, Equating the coefficients of on both sides, we get - or, or,          We know that Differentiating w. r. to , we get - or,  Equating the coefficient of on both sides, we get - or, or,          We have [from relation 1.] and [from relation 2.] Substituting equation in equation , we get -          Differentiating relation 3. w. r. to we get - From relation 1, we have - put, we get - Substituting equation in equation , we get -         Orthogonality of Hermite Polynomials   where    We know that and Multiplying equations and , we get - or,  Now multiplying equation by on both sides and integrating w. r. t. 'x' from to , we get -  putting so that .  The RHS of series contains only the terms having equal powers of and . Therefore the coefficient of provided will be zero. Hence equating the coefficient of on both sides of equation , we get - and Hence from equations and , we have where,     "
},
{
  "id": "fig-fig45",
  "level": "2",
  "url": "subsec-hermit-pol.html#fig-fig45",
  "type": "Figure",
  "number": "4.9.1",
  "title": "",
  "body": " hermite's Polynomial   "
},
{
  "id": "subsubsec-hermt_genfn-3",
  "level": "2",
  "url": "subsec-hermit-pol.html#subsubsec-hermt_genfn-3",
  "type": "Proof",
  "number": "4.9.1.1.1",
  "title": "",
  "body": " We have     for fixed value of , (as in the general term of ) the coefficient of is obtained by putting or,  Now, we know that since , we must have or, . Thus, if is even varies from 0 to and when is odd varies from 0 to . Hence, the coefficient of  Hence, The function is thus said to be the generating function of Hermite polynomials.  "
},
{
  "id": "subsubsec-hermt_rodrg-3",
  "level": "2",
  "url": "subsec-hermit-pol.html#subsubsec-hermt_rodrg-3",
  "type": "Proof",
  "number": "4.9.1.2.1",
  "title": "",
  "body": " We know that Differentiating times w. r. t. , we get - But, we have and or, similarly, and so on. In general,  Hence from equation , we have  [from equation ] This is differential form of Hermite polynomial, which gives and so on.  "
},
{
  "id": "subsubsec-hermt_recr-2-1-2",
  "level": "2",
  "url": "subsec-hermit-pol.html#subsubsec-hermt_recr-2-1-2",
  "type": "Proof",
  "number": "I.1",
  "title": "",
  "body": " We know that Differentiating w. r. to , we get - or, or, Equating the coefficients of on both sides, we get - or, or,   "
},
{
  "id": "subsubsec-hermt_recr-2-2-2",
  "level": "2",
  "url": "subsec-hermit-pol.html#subsubsec-hermt_recr-2-2-2",
  "type": "Proof",
  "number": "II.1",
  "title": "",
  "body": " We know that Differentiating w. r. to , we get - or,  Equating the coefficient of on both sides, we get - or, or,   "
},
{
  "id": "subsubsec-hermt_recr-2-3-2",
  "level": "2",
  "url": "subsec-hermit-pol.html#subsubsec-hermt_recr-2-3-2",
  "type": "Proof",
  "number": "III.1",
  "title": "",
  "body": " We have [from relation 1.] and [from relation 2.] Substituting equation in equation , we get -   "
},
{
  "id": "subsubsec-hermt_recr-2-4-2",
  "level": "2",
  "url": "subsec-hermit-pol.html#subsubsec-hermt_recr-2-4-2",
  "type": "Proof",
  "number": "IV.1",
  "title": "",
  "body": " Differentiating relation 3. w. r. to we get - From relation 1, we have - put, we get - Substituting equation in equation , we get -    "
},
{
  "id": "subsubsec-hermt_orth-3",
  "level": "2",
  "url": "subsec-hermit-pol.html#subsubsec-hermt_orth-3",
  "type": "Proof",
  "number": "4.9.1.4.1",
  "title": "",
  "body": " We know that and Multiplying equations and , we get - or,  Now multiplying equation by on both sides and integrating w. r. t. 'x' from to , we get -  putting so that .  The RHS of series contains only the terms having equal powers of and . Therefore the coefficient of provided will be zero. Hence equating the coefficient of on both sides of equation , we get - and Hence from equations and , we have where,   "
},
{
  "id": "sec_fourth-examplesE",
  "level": "1",
  "url": "sec_fourth-examplesE.html",
  "type": "Section",
  "number": "4.10",
  "title": "Examples E",
  "body": " Examples E   Hermite's Function    Prove that     We know that   Equating the coefficient of on both sides, we get - Replacing by , we get -         Prove that     We have   [Integrating by parts]  ( using recurrence relation 1.)   [ ]   Alternative. From recurrence relation 2, we have           Prove that            We have      putting , we get -       putting , we get -         Prove that     We have or, Therefore,      Since,  and      "
},
{
  "id": "sec_fourth-examplesE-2-2",
  "level": "2",
  "url": "sec_fourth-examplesE.html#sec_fourth-examplesE-2-2",
  "type": "Example",
  "number": "4.10.1",
  "title": "",
  "body": "  Prove that     We know that   Equating the coefficient of on both sides, we get - Replacing by , we get -      "
},
{
  "id": "sec_fourth-examplesE-2-3",
  "level": "2",
  "url": "sec_fourth-examplesE.html#sec_fourth-examplesE-2-3",
  "type": "Example",
  "number": "4.10.2",
  "title": "",
  "body": "  Prove that     We have   [Integrating by parts]  ( using recurrence relation 1.)   [ ]   Alternative. From recurrence relation 2, we have        "
},
{
  "id": "sec_fourth-examplesE-2-4",
  "level": "2",
  "url": "sec_fourth-examplesE.html#sec_fourth-examplesE-2-4",
  "type": "Example",
  "number": "4.10.3",
  "title": "",
  "body": "  Prove that            We have      putting , we get -       putting , we get -      "
},
{
  "id": "sec_fourth-examplesE-2-5",
  "level": "2",
  "url": "sec_fourth-examplesE.html#sec_fourth-examplesE-2-5",
  "type": "Example",
  "number": "4.10.4",
  "title": "",
  "body": "  Prove that     We have or, Therefore,      Since,  and    "
},
{
  "id": "subsec-laguer_pol",
  "level": "1",
  "url": "subsec-laguer_pol.html",
  "type": "Subsection",
  "number": "4.11.1",
  "title": "Laguerre’s Polynomial",
  "body": " Laguerre's Polynomial    Python Code:  import numpy as np  from scipy.special import genlaguerre  from scipy.special import laguerre  import matplotlib.pyplot as plt  x = np.arange(-1.0, 5.0, 0.01)  fig, ax = plt.subplots()  ax.set_ylim(-5.0, 5.0)  ax.set_title(r'Laguerre polynomials $L_n$')  for n in np.arange(0, 5):  ax.plot(x, laguerre(n)(x), label=rf'$L_{n}(x)$')  plt.legend(loc='best')  plt.xlabel(\"x\")  plt.ylabel(r'$L_n(x)$')  plt.legend(loc='lower right')  plt.show()     Generating Function for   generating function for Laguerre's polynomial The generating function for Laguerre's polynomial is defined as    We have  or,      on putting , the coefficient of for fixed value of is , as and . Thus or, . Hence the coefficient of on RHS of equation is Therefore, is the generating function of .     Rodrigue's Differential Formula for      We have the generating function for is Differentiating times w. r. to 't', we get - or,  But, or, similarly, In general, Hence from equation , we have Thus, This is the Rodrigue's formula for .     Recurrence Relation for        We have the generating function Differentiating equation w. r. to 't', we get - or, or,  Equating the coefficient of on both sides, we get - or, [on multiplying by ] Or,          Differentiating above equation w. r. to 'x', we get - or, or, Equating the coefficient of on both sides, we get -  or,          Differentiating the recurrence relation (1) w. r. to 'x', we get - Replacing by in relation (2), we get - or, Also, from relation (2), we have Substituting equations and in equation , we get -  or, or, or, or,        Orthogonal Property of Laguerre Polynomials      We have and   thus,  Now,     in which coefficient of is if and if . Hence,     "
},
{
  "id": "subsubsec-laguer_genfn-3",
  "level": "2",
  "url": "subsec-laguer_pol.html#subsubsec-laguer_genfn-3",
  "type": "Proof",
  "number": "4.11.1.1.1",
  "title": "",
  "body": " We have  or,      on putting , the coefficient of for fixed value of is , as and . Thus or, . Hence the coefficient of on RHS of equation is Therefore, is the generating function of .  "
},
{
  "id": "subsubsec-laguer_rodr-3",
  "level": "2",
  "url": "subsec-laguer_pol.html#subsubsec-laguer_rodr-3",
  "type": "Proof",
  "number": "4.11.1.2.1",
  "title": "",
  "body": " We have the generating function for is Differentiating times w. r. to 't', we get - or,  But, or, similarly, In general, Hence from equation , we have Thus, This is the Rodrigue's formula for .  "
},
{
  "id": "subsubsec-laguer_recr-2-1-2",
  "level": "2",
  "url": "subsec-laguer_pol.html#subsubsec-laguer_recr-2-1-2",
  "type": "Proof",
  "number": "1.1",
  "title": "",
  "body": " We have the generating function Differentiating equation w. r. to 't', we get - or, or,  Equating the coefficient of on both sides, we get - or, [on multiplying by ] Or,   "
},
{
  "id": "subsubsec-laguer_recr-2-2-2",
  "level": "2",
  "url": "subsec-laguer_pol.html#subsubsec-laguer_recr-2-2-2",
  "type": "Proof",
  "number": "2.1",
  "title": "",
  "body": " Differentiating above equation w. r. to 'x', we get - or, or, Equating the coefficient of on both sides, we get -  or,   "
},
{
  "id": "subsubsec-laguer_recr-2-3-2",
  "level": "2",
  "url": "subsec-laguer_pol.html#subsubsec-laguer_recr-2-3-2",
  "type": "Proof",
  "number": "3.1",
  "title": "",
  "body": " Differentiating the recurrence relation (1) w. r. to 'x', we get - Replacing by in relation (2), we get - or, Also, from relation (2), we have Substituting equations and in equation , we get -  or, or, or, or,   "
},
{
  "id": "subsubsec-laguer-orth-3",
  "level": "2",
  "url": "subsec-laguer_pol.html#subsubsec-laguer-orth-3",
  "type": "Proof",
  "number": "4.11.1.4.1",
  "title": "",
  "body": " We have and   thus,  Now,     in which coefficient of is if and if . Hence,   "
},
{
  "id": "sec_fourth-examplesF",
  "level": "1",
  "url": "sec_fourth-examplesF.html",
  "type": "Section",
  "number": "4.12",
  "title": "Examples F",
  "body": " Examples F   Laguerre's Function    Prove that     We have putting , we get -        Prove that and hence deduce that .    Since satisfies the Laguerre's equation, [for ]. putting , we have        Evaluate     We may have   put and equate the coefficients of on both sides, we get -    Alternative: In case of in eqn. , we have    Integrating by parts times,       Show that     We have Therefore Replacing by , we get -  Also,    similarly, and in general,       Show that if      Rodrigue's formula for is          "
},
{
  "id": "sec_fourth-examplesF-2-2",
  "level": "2",
  "url": "sec_fourth-examplesF.html#sec_fourth-examplesF-2-2",
  "type": "Example",
  "number": "4.12.1",
  "title": "",
  "body": "  Prove that     We have putting , we get -     "
},
{
  "id": "sec_fourth-examplesF-2-3",
  "level": "2",
  "url": "sec_fourth-examplesF.html#sec_fourth-examplesF-2-3",
  "type": "Example",
  "number": "4.12.2",
  "title": "",
  "body": "  Prove that and hence deduce that .    Since satisfies the Laguerre's equation, [for ]. putting , we have     "
},
{
  "id": "sec_fourth-examplesF-2-4",
  "level": "2",
  "url": "sec_fourth-examplesF.html#sec_fourth-examplesF-2-4",
  "type": "Example",
  "number": "4.12.3",
  "title": "",
  "body": "  Evaluate     We may have   put and equate the coefficients of on both sides, we get -    Alternative: In case of in eqn. , we have    Integrating by parts times,    "
},
{
  "id": "sec_fourth-examplesF-2-5",
  "level": "2",
  "url": "sec_fourth-examplesF.html#sec_fourth-examplesF-2-5",
  "type": "Example",
  "number": "4.12.4",
  "title": "",
  "body": "  Show that     We have Therefore Replacing by , we get -  Also,    similarly, and in general,    "
},
{
  "id": "sec_fourth-examplesF-2-6",
  "level": "2",
  "url": "sec_fourth-examplesF.html#sec_fourth-examplesF-2-6",
  "type": "Example",
  "number": "4.12.5",
  "title": "",
  "body": "  Show that if      Rodrigue's formula for is        "
},
{
  "id": "ex_fourth",
  "level": "1",
  "url": "ex_fourth.html",
  "type": "Exercises",
  "number": "4.13",
  "title": "Exercise",
  "body": "  Exercise  Solve the following differential equations.                      Solve      Solve      Solve      Apply power series method to find the solution of the following linear equations.    With the initial conditions .                                           Express in terms of Legendre's Polynomials.                From the values of Legendre's Polynomials, prove that          Prove that   Prove that   Show that   Prove that for odd.  Find the value of .   and    Prove that   Prove that   Show that   Prove that   Prove that   Prove that   Prove that   Show that   Show that   Show that   Prove that   Find the values of                Prove that   "
},
{
  "id": "ex_fourth-2",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-2",
  "type": "Exercise",
  "number": "4.13.1",
  "title": "",
  "body": "Solve the following differential equations.                     "
},
{
  "id": "ex_fourth-3",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-3",
  "type": "Exercise",
  "number": "4.13.2",
  "title": "",
  "body": "Solve     "
},
{
  "id": "ex_fourth-4",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-4",
  "type": "Exercise",
  "number": "4.13.3",
  "title": "",
  "body": "Solve     "
},
{
  "id": "ex_fourth-5",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-5",
  "type": "Exercise",
  "number": "4.13.4",
  "title": "",
  "body": "Solve     "
},
{
  "id": "ex_fourth-6",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-6",
  "type": "Exercise",
  "number": "4.13.5",
  "title": "",
  "body": "Apply power series method to find the solution of the following linear equations.    With the initial conditions .                                          "
},
{
  "id": "ex_fourth-7",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-7",
  "type": "Exercise",
  "number": "4.13.6",
  "title": "",
  "body": "Express in terms of Legendre's Polynomials.               "
},
{
  "id": "ex_fourth-8",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-8",
  "type": "Exercise",
  "number": "4.13.7",
  "title": "",
  "body": "From the values of Legendre's Polynomials, prove that         "
},
{
  "id": "ex_fourth-9",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-9",
  "type": "Exercise",
  "number": "4.13.8",
  "title": "",
  "body": "Prove that  "
},
{
  "id": "ex_fourth-10",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-10",
  "type": "Exercise",
  "number": "4.13.9",
  "title": "",
  "body": "Prove that  "
},
{
  "id": "ex_fourth-11",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-11",
  "type": "Exercise",
  "number": "4.13.10",
  "title": "",
  "body": "Show that  "
},
{
  "id": "ex_fourth-12",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-12",
  "type": "Exercise",
  "number": "4.13.11",
  "title": "",
  "body": "Prove that for odd. "
},
{
  "id": "ex_fourth-13",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-13",
  "type": "Exercise",
  "number": "4.13.12",
  "title": "",
  "body": "Find the value of .   and   "
},
{
  "id": "ex_fourth-14",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-14",
  "type": "Exercise",
  "number": "4.13.13",
  "title": "",
  "body": "Prove that  "
},
{
  "id": "ex_fourth-15",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-15",
  "type": "Exercise",
  "number": "4.13.14",
  "title": "",
  "body": "Prove that  "
},
{
  "id": "ex_fourth-16",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-16",
  "type": "Exercise",
  "number": "4.13.15",
  "title": "",
  "body": "Show that  "
},
{
  "id": "ex_fourth-17",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-17",
  "type": "Exercise",
  "number": "4.13.16",
  "title": "",
  "body": "Prove that  "
},
{
  "id": "ex_fourth-18",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-18",
  "type": "Exercise",
  "number": "4.13.17",
  "title": "",
  "body": "Prove that  "
},
{
  "id": "ex_fourth-19",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-19",
  "type": "Exercise",
  "number": "4.13.18",
  "title": "",
  "body": "Prove that  "
},
{
  "id": "ex_fourth-20",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-20",
  "type": "Exercise",
  "number": "4.13.19",
  "title": "",
  "body": "Prove that  "
},
{
  "id": "ex_fourth-21",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-21",
  "type": "Exercise",
  "number": "4.13.20",
  "title": "",
  "body": "Show that  "
},
{
  "id": "ex_fourth-22",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-22",
  "type": "Exercise",
  "number": "4.13.21",
  "title": "",
  "body": "Show that  "
},
{
  "id": "ex_fourth-23",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-23",
  "type": "Exercise",
  "number": "4.13.22",
  "title": "",
  "body": "Show that  "
},
{
  "id": "ex_fourth-24",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-24",
  "type": "Exercise",
  "number": "4.13.23",
  "title": "",
  "body": "Prove that  "
},
{
  "id": "ex_fourth-25",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-25",
  "type": "Exercise",
  "number": "4.13.24",
  "title": "",
  "body": "Find the values of               "
},
{
  "id": "ex_fourth-26",
  "level": "2",
  "url": "ex_fourth.html#ex_fourth-26",
  "type": "Exercise",
  "number": "4.13.25",
  "title": "",
  "body": "Prove that  "
},
{
  "id": "subsec-fourier_coef",
  "level": "1",
  "url": "subsec-fourier_coef.html",
  "type": "Subsection",
  "number": "5.1.1",
  "title": "Determination of Fourier Coefficients",
  "body": " Determination of Fourier Coefficients  The Fourier series representation is given by     To find : Integrate equation from to , we get -        To find : Multiply equation, by and integrate from to , we get -        To find : Multiply equation by and integrate it from to , we get -       "
},
{
  "id": "sec_fifth-examplesA",
  "level": "1",
  "url": "sec_fifth-examplesA.html",
  "type": "Section",
  "number": "5.2",
  "title": "Examples A",
  "body": " Examples A    Find the Fourier series expansion of , where , and sketch its graph from to .    Let where    and   Substituting these values in expression , we get - The graphical representation of the given function is shown in figure below.       Obtain the Fourier series for in the interval .    Let where          From expression , we get -   which is the required Fourier series.      Find the Fourier series of the function     Let where          now, from expression , we get -   which is the required Fourier series expansion.    "
},
{
  "id": "sec_fifth-examplesA-2",
  "level": "2",
  "url": "sec_fifth-examplesA.html#sec_fifth-examplesA-2",
  "type": "Example",
  "number": "5.2.1",
  "title": "",
  "body": "  Find the Fourier series expansion of , where , and sketch its graph from to .    Let where    and   Substituting these values in expression , we get - The graphical representation of the given function is shown in figure below.    "
},
{
  "id": "sec_fifth-examplesA-3",
  "level": "2",
  "url": "sec_fifth-examplesA.html#sec_fifth-examplesA-3",
  "type": "Example",
  "number": "5.2.2",
  "title": "",
  "body": "  Obtain the Fourier series for in the interval .    Let where          From expression , we get -   which is the required Fourier series.   "
},
{
  "id": "sec_fifth-examplesA-4",
  "level": "2",
  "url": "sec_fifth-examplesA.html#sec_fifth-examplesA-4",
  "type": "Example",
  "number": "5.2.3",
  "title": "",
  "body": "  Find the Fourier series of the function     Let where          now, from expression , we get -   which is the required Fourier series expansion.   "
},
{
  "id": "subsec-fourier_sum",
  "level": "1",
  "url": "subsec-fourier_sum.html",
  "type": "Subsection",
  "number": "5.3.1",
  "title": "Summing of Fourier Series",
  "body": " Summing of Fourier Series   Since the Fouries series is a convergent series, it converges to     , if is a point of continuity.     , if is a point of discontinuity.     at , if is a point of discontinuity.      Half - Range Series  If a half - range series for a function is desired, then the function is generally defined in an open interval , which is half of the interval and hence the name half - range. In this case the function is expressed as an odd or even function. For interval (0,c)      "
},
{
  "id": "sec_fifth-examplesB",
  "level": "1",
  "url": "sec_fifth-examplesB.html",
  "type": "Section",
  "number": "5.4",
  "title": "Examples B",
  "body": " Examples B    Obtain Fourier series expansion of from to , and deduce , also find the sum of series     Let the given function is expanded in a Fourier series here, the function is an even function. Hence,       which is the required Fourier series expansion of the given function. The graphical representation of this function is parabolic curves as shown in figure below.   As is a point of discontinuity, the series converges to Therefore, from eqn. , we have or, Also, at the point of continuity, i.e., at , we have from eqn. , or,       Obtain a Fourier series expansion of for .    Let here, the given function is an odd function. Hence,            Obatin the Fourier series expansion of in the interval , also deduce     Let here,          and      Therefore, the expression becomes -   As and are points of discontinuties, the sum of the series of eqn. is given by  Hence, from eqn. , we get - or,       Find the Fourier series for the periodic function defined by Hence deduce that     Let where   and  and  Hence, the Fourier series expansion of the given function is  The graphical representation of the function is shown in figure below.   There are three points of discontinuities at  , and at , the series converges to  Therefore from eqn. , we have or,       Find the Fourier series of Hence deduce that             Let where,     [ for n=1, ] where n=2m. The graphical representation of the function is shown in figure below. put and in eqn. to deduce the series for a. and b., respectively.    "
},
{
  "id": "sec_fifth-examplesB-2",
  "level": "2",
  "url": "sec_fifth-examplesB.html#sec_fifth-examplesB-2",
  "type": "Example",
  "number": "5.4.1",
  "title": "",
  "body": "  Obtain Fourier series expansion of from to , and deduce , also find the sum of series     Let the given function is expanded in a Fourier series here, the function is an even function. Hence,       which is the required Fourier series expansion of the given function. The graphical representation of this function is parabolic curves as shown in figure below.   As is a point of discontinuity, the series converges to Therefore, from eqn. , we have or, Also, at the point of continuity, i.e., at , we have from eqn. , or,    "
},
{
  "id": "sec_fifth-examplesB-3",
  "level": "2",
  "url": "sec_fifth-examplesB.html#sec_fifth-examplesB-3",
  "type": "Example",
  "number": "5.4.2",
  "title": "",
  "body": "  Obtain a Fourier series expansion of for .    Let here, the given function is an odd function. Hence,         "
},
{
  "id": "sec_fifth-examplesB-4",
  "level": "2",
  "url": "sec_fifth-examplesB.html#sec_fifth-examplesB-4",
  "type": "Example",
  "number": "5.4.3",
  "title": "",
  "body": "  Obatin the Fourier series expansion of in the interval , also deduce     Let here,          and      Therefore, the expression becomes -   As and are points of discontinuties, the sum of the series of eqn. is given by  Hence, from eqn. , we get - or,    "
},
{
  "id": "sec_fifth-examplesB-5",
  "level": "2",
  "url": "sec_fifth-examplesB.html#sec_fifth-examplesB-5",
  "type": "Example",
  "number": "5.4.4",
  "title": "",
  "body": "  Find the Fourier series for the periodic function defined by Hence deduce that     Let where   and  and  Hence, the Fourier series expansion of the given function is  The graphical representation of the function is shown in figure below.   There are three points of discontinuities at  , and at , the series converges to  Therefore from eqn. , we have or,    "
},
{
  "id": "sec_fifth-examplesB-6",
  "level": "2",
  "url": "sec_fifth-examplesB.html#sec_fifth-examplesB-6",
  "type": "Example",
  "number": "5.4.5",
  "title": "",
  "body": "  Find the Fourier series of Hence deduce that             Let where,     [ for n=1, ] where n=2m. The graphical representation of the function is shown in figure below. put and in eqn. to deduce the series for a. and b., respectively.   "
},
{
  "id": "subsec-fourier_complex",
  "level": "1",
  "url": "subsec-fourier_complex.html",
  "type": "Subsection",
  "number": "5.5.1",
  "title": "Complex Form of Fourier Series",
  "body": " Complex Form of Fourier Series   complex fourier series The complex form of Fourier series is obtained by expressing and in the exponential form, i.e.,     where, Equation is a complex form of Fourier series. On multiplying both sides of equation by and integrating w.r.t. 'x', we get -   The function is being defined in the interval . Hence,   "
},
{
  "id": "subsec-fourier_intg",
  "level": "1",
  "url": "subsec-fourier_intg.html",
  "type": "Subsection",
  "number": "5.5.2",
  "title": "Fourier Integral",
  "body": " Fourier Integral   Fourier integral Fourier series of a periodic function in the interval [-l,l] is given by where,  and Substituting these values in equation , we get -   or, If we set so that where and Hence, equation becomes or, Since and [as ]. Equation is called the Fourier integral formula.  "
},
{
  "id": "subsec-gibbs_phen",
  "level": "1",
  "url": "subsec-gibbs_phen.html",
  "type": "Subsection",
  "number": "5.5.3",
  "title": "Gibb’s Phenomenon",
  "body": " Gibb's Phenomenon   Gibb's Phenomenon Gibb's phenomenon describes a special case where a funciton has a jump discontinuity. An anomaly occurs near the discontinuity in an approximation of an original function using its Fourier series. The values of the partial sums near the discontinuity overshoot or undershoot the fuction value. As more and more terms incorporate in the partial sums the graph of the function resembles the original function more closely away from the point of discontinuity. However, the blips near the discontinuity persists. Although the size of blips decreases in width they appear to remain at the same height. In other words, the series converges correctly at any point due to increase of terms in the partial sums, but the blips do not converges to zero as shown in figure . This lack of improvement in the approximation near the discontinuity menifested in the continual presence of the overshoot or undershoot is the Gibb's phenomenon.   Gibbs Phenomena    In the immediate vicinity of a jump discontinuity i.e. at or , the function is not same and hence the convergence of the Fourier series is not uniform since . Here partial sums move progressively closer to the function as the number of terms is increased, but the partial sums (approximating curves) overshoot or undershoot the function at the jump discontinuity. To verify the validity of Gibbs phenomenon, i.e. Fourier expansion for functions which are discontinuous but piecewise smooth, Bocher considered the following specific function defined by here and . i.e., the function jumps by at the points where . The Fourier coefficients of this function are .  Thus, if the Fourier expansion for such functions is valid, we have The partial sum is given by    The remainder,  or, where On differentiating equation with respect to 'x', we find that has maxima or minima at The value of at is As for fixed   Hence the remainder, the deviation of the approximation from at which approaches the point of the discontinuity at (end point), tends to the limit For , we find that  Hence the negative sign in equation indicates that the approximate curve for is overshooted by about m at a jump discontinuity (i.e., at ), in the Fourier series.  "
},
{
  "id": "fig-Gibbs",
  "level": "2",
  "url": "subsec-gibbs_phen.html#fig-Gibbs",
  "type": "Figure",
  "number": "5.5.1",
  "title": "",
  "body": " Gibbs Phenomena   "
},
{
  "id": "sec_fifth-examplesC",
  "level": "1",
  "url": "sec_fifth-examplesC.html",
  "type": "Section",
  "number": "5.6",
  "title": "Examples C",
  "body": " Examples C    A periodic function of period 4 is defined as for . Find its Fourier series expansion.    Here, and so is even. Therefore it can be expanded only in cosine series and the coefficients can be evaluated from half range only. i.e., the Fourier series is where             Find the Fourier series expansion of the periodic function of period .     Here,  .                 Expand in cosine series over [0,1].     where,           Find a series of sines of multiples of which will represent in the interval.    Let where,          A saw tooth wave is given by for or, for , find the Fourier series representation of the wave.    The Fourier series expansion of a function is written as: where,  and    The graphical representation of the functions and is shown in figure below.    or,  where,  which gives the ordinate of the axis of the curve.       However, if the wave is expressed in terms of angular velocity , the term had better replaced by and in that case . . For , we have     The graph of the given function is shown in figure below.       Triangular wave is given by      where   This is the displacement of the axis of the curve from the axis of the co-ordinate system. Now,   thus only odd harmonics with cosine terms would appear in the series.   Hence, where n is an odd number.      Find the Fourier series expansion a given square - wave or,     Let where      Therefore, the required Fourier series is The graphical representation of the functions is shown in the figure below.       A full - wave rectifier is given by Find the Fourier series expansion.    Let where      and    for n=1, ]  Hence the required Fourier series is The graphical representation of the functions is shown in figure below.     "
},
{
  "id": "sec_fifth-examplesC-2",
  "level": "2",
  "url": "sec_fifth-examplesC.html#sec_fifth-examplesC-2",
  "type": "Example",
  "number": "5.6.1",
  "title": "",
  "body": "  A periodic function of period 4 is defined as for . Find its Fourier series expansion.    Here, and so is even. Therefore it can be expanded only in cosine series and the coefficients can be evaluated from half range only. i.e., the Fourier series is where          "
},
{
  "id": "sec_fifth-examplesC-3",
  "level": "2",
  "url": "sec_fifth-examplesC.html#sec_fifth-examplesC-3",
  "type": "Example",
  "number": "5.6.2",
  "title": "",
  "body": "  Find the Fourier series expansion of the periodic function of period .     Here,  .              "
},
{
  "id": "sec_fifth-examplesC-4",
  "level": "2",
  "url": "sec_fifth-examplesC.html#sec_fifth-examplesC-4",
  "type": "Example",
  "number": "5.6.3",
  "title": "",
  "body": "  Expand in cosine series over [0,1].     where,        "
},
{
  "id": "sec_fifth-examplesC-5",
  "level": "2",
  "url": "sec_fifth-examplesC.html#sec_fifth-examplesC-5",
  "type": "Example",
  "number": "5.6.4",
  "title": "",
  "body": "  Find a series of sines of multiples of which will represent in the interval.    Let where,       "
},
{
  "id": "sec_fifth-examplesC-6",
  "level": "2",
  "url": "sec_fifth-examplesC.html#sec_fifth-examplesC-6",
  "type": "Example",
  "number": "5.6.5",
  "title": "",
  "body": "  A saw tooth wave is given by for or, for , find the Fourier series representation of the wave.    The Fourier series expansion of a function is written as: where,  and    The graphical representation of the functions and is shown in figure below.    or,  where,  which gives the ordinate of the axis of the curve.       However, if the wave is expressed in terms of angular velocity , the term had better replaced by and in that case . . For , we have     The graph of the given function is shown in figure below.    "
},
{
  "id": "sec_fifth-examplesC-7",
  "level": "2",
  "url": "sec_fifth-examplesC.html#sec_fifth-examplesC-7",
  "type": "Example",
  "number": "5.6.6",
  "title": "",
  "body": "  Triangular wave is given by      where   This is the displacement of the axis of the curve from the axis of the co-ordinate system. Now,   thus only odd harmonics with cosine terms would appear in the series.   Hence, where n is an odd number.   "
},
{
  "id": "sec_fifth-examplesC-8",
  "level": "2",
  "url": "sec_fifth-examplesC.html#sec_fifth-examplesC-8",
  "type": "Example",
  "number": "5.6.7",
  "title": "",
  "body": "  Find the Fourier series expansion a given square - wave or,     Let where      Therefore, the required Fourier series is The graphical representation of the functions is shown in the figure below.    "
},
{
  "id": "sec_fifth-examplesC-9",
  "level": "2",
  "url": "sec_fifth-examplesC.html#sec_fifth-examplesC-9",
  "type": "Example",
  "number": "5.6.8",
  "title": "",
  "body": "  A full - wave rectifier is given by Find the Fourier series expansion.    Let where      and    for n=1, ]  Hence the required Fourier series is The graphical representation of the functions is shown in figure below.    "
},
{
  "id": "ex_fifth",
  "level": "1",
  "url": "ex_fifth.html",
  "type": "Exercises",
  "number": "5.7",
  "title": "Exercise",
  "body": "  Exercise  Expand the following functions in a cosine series and a sine series:   when    when .                 Expand the following function in the Fourier series in the interval .      Find the Fourier series representation of the half wave rectifier given by the following function:       hence,     Find the Fourier series representation of a full wave rectifier given by the following function:        Develop the Fourier expansion for a triangular wave represented by the following function:       Determine the Fourier series expansion of the function , for . Hence deduce that    Python Code 1  from sympy import fourier_series, pi, plot from sympy.abc import x f = x s = fourier_series(f, (x, 0, pi)) s1 = s.truncate(n = 5) s2 = s.truncate(n = 7) s3 = s.truncate(n = 9) p = plot(f, s1, s2, s3, (x, 0, pi), show=False, legend=True) s  p.show()   python code    "
},
{
  "id": "ex_fifth-2",
  "level": "2",
  "url": "ex_fifth.html#ex_fifth-2",
  "type": "Exercise",
  "number": "5.7.1",
  "title": "",
  "body": "Expand the following functions in a cosine series and a sine series:   when    when .                "
},
{
  "id": "ex_fifth-3",
  "level": "2",
  "url": "ex_fifth.html#ex_fifth-3",
  "type": "Exercise",
  "number": "5.7.2",
  "title": "",
  "body": "Expand the following function in the Fourier series in the interval .     "
},
{
  "id": "ex_fifth-4",
  "level": "2",
  "url": "ex_fifth.html#ex_fifth-4",
  "type": "Exercise",
  "number": "5.7.3",
  "title": "",
  "body": "Find the Fourier series representation of the half wave rectifier given by the following function:       hence,    "
},
{
  "id": "ex_fifth-5",
  "level": "2",
  "url": "ex_fifth.html#ex_fifth-5",
  "type": "Exercise",
  "number": "5.7.4",
  "title": "",
  "body": "Find the Fourier series representation of a full wave rectifier given by the following function:       "
},
{
  "id": "ex_fifth-6",
  "level": "2",
  "url": "ex_fifth.html#ex_fifth-6",
  "type": "Exercise",
  "number": "5.7.5",
  "title": "",
  "body": "Develop the Fourier expansion for a triangular wave represented by the following function:      "
},
{
  "id": "ex_fifth-7",
  "level": "2",
  "url": "ex_fifth.html#ex_fifth-7",
  "type": "Exercise",
  "number": "5.7.6",
  "title": "",
  "body": "Determine the Fourier series expansion of the function , for . Hence deduce that  "
},
{
  "id": "subsec-dirac_prop",
  "level": "1",
  "url": "subsec-dirac_prop.html",
  "type": "Subsection",
  "number": "6.1.1",
  "title": "Properties of Delta functions",
  "body": " Properties of Delta functions    If is continuous in a certain interval which includes the origin, then                               "
},
{
  "id": "subsec-fourier_trans",
  "level": "1",
  "url": "subsec-fourier_trans.html",
  "type": "Subsection",
  "number": "6.1.2",
  "title": "Fourier Transforms",
  "body": " Fourier Transforms    Fourier transforms The Fourier transform is a mathematical tool used to analyze functions and signals, particularly in the field of signal processing. It decomposes a function of time, , into its frequency components . The Fourier transform allows us to represent a function in terms of its constituent frequencies. It is useful in finding the solution of partial differential equation with boundary value conditions. The Fourier transform can also be used to transform functions from one spatial domain to another. In particular, the Fourier transform can convert a function from the spatial domain to the wavevector domain , which is analogous to the frequency domain. When considering functions in multiple dimensions, such as functions of space variables, the Fourier transform can be extended to perform spatial transformations. For instance, in one dimension, if we have a function defined in the spatial domain, its Fourier transform is given by: and inverse Fourier Transform is The Fourier transform of a function in the spatial domain provides information about the spatial frequencies present in the function. It allows us to analyze the spatial components of a function, study diffraction patterns, analyze images, and perform various other spatial domain operations.    Fourier Integral Theorem   Fourier integral If the function satisfies the Dritchlet conditions in every interval of and the integration must be convergent i.e., the function is absolutely integrable in the interval of , then The integral on right hand side is then called Fourier integral of .   Fourier series of a function in interval is given by       since cosine functions are even function, we have . Hence the expression     Now assume that increases indefinitely and making use of definition of integral as a limit of sum, we can write -  and here at and making use of the fact  which is known as Fourier integral.     Different Forms of Fourier Integral.  Since, therefore from equation , we have    Cosine Form  Taking and we obtain,   Let be an even function of so that , then is even and is odd function of . Consequently, and Putting these values in equation , we get - which is the required form of Fourier Cosine Integral.    Sine Form  Let be an odd function of so that , then is an odd and is an even function of . Consequently, and putting these values in equation , we get - which is the required form of Fourier Sine Integral.    Exponential Form      From Fourier integral formula      Putting in the second integral, we get - or, (on dropping primes)    Note: putting , in the last integral, we get - from equations and , it is clear that the negative sign in the exponent can be shifted to without effecting the value of integral. Thus equation is an alternate form to equation . In the complex Fourier integral, if we put then, where is called Inverse Fourier Transform of and is called Fourier Transform of .     "
},
{
  "id": "subsubsec-fourier_inttrans-3",
  "level": "2",
  "url": "subsec-fourier_trans.html#subsubsec-fourier_inttrans-3",
  "type": "Proof",
  "number": "6.1.2.1.1",
  "title": "",
  "body": " Fourier series of a function in interval is given by       since cosine functions are even function, we have . Hence the expression     Now assume that increases indefinitely and making use of definition of integral as a limit of sum, we can write -  and here at and making use of the fact  which is known as Fourier integral.  "
},
{
  "id": "subsubsec-fint_forms-5-3",
  "level": "2",
  "url": "subsec-fourier_trans.html#subsubsec-fint_forms-5-3",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " From Fourier integral formula      Putting in the second integral, we get - or, (on dropping primes)    Note: putting , in the last integral, we get - from equations and , it is clear that the negative sign in the exponent can be shifted to without effecting the value of integral. Thus equation is an alternate form to equation . In the complex Fourier integral, if we put then, where is called Inverse Fourier Transform of and is called Fourier Transform of .  "
},
{
  "id": "subsec-rayleigh_theorm",
  "level": "1",
  "url": "subsec-rayleigh_theorm.html",
  "type": "Subsection",
  "number": "6.1.3",
  "title": "Parseval’s Indentity for Fourier Transform.  (Rayleigh’s Theorem)",
  "body": " Parseval's Indentity for Fourier Transform. (Rayleigh's Theorem)  Parseval's identities are the relationship between Fourier coefficients and their respective functions. If and are complex Fourier transforms of and respectively, then          where * represents the complex conjugate.     We have from the Inverse Fourier Transform taking complex conjugate of both sides of equation , we get - but,  (on changing their order of integration)     Again, put in the above expression, we get - or,    Note: Similarly, we can prove the following results:                 "
},
{
  "id": "subsec-rayleigh_theorm-4",
  "level": "2",
  "url": "subsec-rayleigh_theorm.html#subsec-rayleigh_theorm-4",
  "type": "Proof",
  "number": "6.1.3.1",
  "title": "",
  "body": " We have from the Inverse Fourier Transform taking complex conjugate of both sides of equation , we get - but,  (on changing their order of integration)     Again, put in the above expression, we get - or,    Note: Similarly, we can prove the following results:                "
},
{
  "id": "subsec-fsine_trans",
  "level": "1",
  "url": "subsec-fsine_trans.html",
  "type": "Subsection",
  "number": "6.1.4",
  "title": "The (Infinite) Fourier Sine Transform of <span class=\"process-math\">\\(\\mathcal{F}(k)\\)<\/span>",
  "body": " The (Infinite) Fourier Sine Transform of  If then is called the Fourier sine transform of and if is called the inverse Fourier sine transform of . Also, Fourier Cosine Transform and Inverse Fourier Cosine Transform are given as and   "
},
{
  "id": "subsec-imprt_intgs",
  "level": "1",
  "url": "subsec-imprt_intgs.html",
  "type": "Subsection",
  "number": "6.1.5",
  "title": "Some important Integrals:",
  "body": " Some important Integrals:   useful integrals                       "
},
{
  "id": "subsec-Ftrans_prop",
  "level": "1",
  "url": "subsec-Ftrans_prop.html",
  "type": "Subsection",
  "number": "6.1.6",
  "title": "Properties of Fourier Transforms",
  "body": " Properties of Fourier Transforms    Linear Property: If and are arbitrary constants, then    we have       Change of Scale Property:    If is the Fourier transform of , then is the Fourier transform of .   We have   [put ]      is the Fourier sine transform of , then Fourier sine transform of is .     put ]      [We can easily proved this as above].      Shifting Property: If is the Fourier transform of , then is the Fourier transform of .    put,        "
},
{
  "id": "subsec-Ftrans_prop-2-1-2",
  "level": "2",
  "url": "subsec-Ftrans_prop.html#subsec-Ftrans_prop-2-1-2",
  "type": "Proof",
  "number": "1.1",
  "title": "",
  "body": " we have    "
},
{
  "id": "subsec-Ftrans_prop-2-2-2-1-2",
  "level": "2",
  "url": "subsec-Ftrans_prop.html#subsec-Ftrans_prop-2-2-2-1-2",
  "type": "Proof",
  "number": "2.a.1",
  "title": "",
  "body": " We have   [put ]  "
},
{
  "id": "subsec-Ftrans_prop-2-2-2-2-2",
  "level": "2",
  "url": "subsec-Ftrans_prop.html#subsec-Ftrans_prop-2-2-2-2-2",
  "type": "Proof",
  "number": "2.b.1",
  "title": "",
  "body": "   put ]  "
},
{
  "id": "subsec-Ftrans_prop-2-3-2",
  "level": "2",
  "url": "subsec-Ftrans_prop.html#subsec-Ftrans_prop-2-3-2",
  "type": "Proof",
  "number": "3.1",
  "title": "",
  "body": "  put,     "
},
{
  "id": "subsec-ftrans_deriv",
  "level": "1",
  "url": "subsec-ftrans_deriv.html",
  "type": "Subsection",
  "number": "6.1.7",
  "title": "The Fourier Tansform of Derivative of <span class=\"process-math\">\\(f(x)\\)<\/span>",
  "body": " The Fourier Tansform of Derivative of  The Fourier transform of derivative of is , where is the Fourier transform of .   We have Now replace by we get -   [ as ] Also, generalising these for derivatives, we get -      Similarly, we can show that    "
},
{
  "id": "subsec-ftrans_deriv-3",
  "level": "2",
  "url": "subsec-ftrans_deriv.html#subsec-ftrans_deriv-3",
  "type": "Proof",
  "number": "6.1.7.1",
  "title": "",
  "body": " We have Now replace by we get -   [ as ] Also, generalising these for derivatives, we get -      Similarly, we can show that   "
},
{
  "id": "subsec-Fconvl",
  "level": "1",
  "url": "subsec-Fconvl.html",
  "type": "Subsection",
  "number": "6.1.8",
  "title": "Convolution Theorem",
  "body": " Convolution Theorem  Convolution theorem is a mathematical operation widely used in communication physics. If and are Fourier transform of two functions and respectively, then Fourier transform of the convolution (coiled) of and is the product of their Fourier transforms, i.e. where the astric denotes convolution (not a complex conjugate).   The convolution means derive from the Dirac Delta function   (on changing the order of integration)     If is time and is frequency then convolution of two signal in time domain corresponds to the multiplication of their Fourier transform in frequency domain.   "
},
{
  "id": "subsec-Fconvl-3",
  "level": "2",
  "url": "subsec-Fconvl.html#subsec-Fconvl-3",
  "type": "Proof",
  "number": "6.1.8.1",
  "title": "",
  "body": " The convolution means derive from the Dirac Delta function   (on changing the order of integration)     If is time and is frequency then convolution of two signal in time domain corresponds to the multiplication of their Fourier transform in frequency domain.  "
},
{
  "id": "subsec-infnt_FT",
  "level": "1",
  "url": "subsec-infnt_FT.html",
  "type": "Subsection",
  "number": "6.1.9",
  "title": "Choice of infinite Sine or Cosine Transforms to Boundary Value Problems",
  "body": " Choice of infinite Sine or Cosine Transforms to Boundary Value Problems  The choice of sine or cosine transform is decided by the form of boundary conditions.   If also,    if From equations and , it follows that if we want to remove the term from a given differential equation then we require   in cosine transform and   in sine transform.    "
},
{
  "id": "sec_sixth-examplesA",
  "level": "1",
  "url": "sec_sixth-examplesA.html",
  "type": "Section",
  "number": "6.2",
  "title": "ExamplesA",
  "body": " ExamplesA    Find the Fourier Transform of     Fourier transform of is            Find the Fourier transform of defined by and hence evalute            we have        Again, if then  but, from   or,  equating real parts on both sides, we get -   Also, if then from expression we have [for and ] Or, or,       Find     Given that                  Find the Fourier sine and cosine transform of .        similarly Fourier cosine transform can be obtained.      Find Fourier sine and cosine transform of     we have  and        Find and if     we have              Find the Fourier Cosine transform of .    By definition Now, differentiating w.r.t. 's', we get -   or, or, on integrating, we get - or, when s =0, putting this value in eqn. , we get -        Show that Fourier transform of is its own Fourier transform.    we have    put so that . [ ] Hence, is its own Fourier transform.      Find .            Find complex Fourier transform of .                Find the Fourier sine transform of the function                 Find the Fourier sine and cosine transform of .      Let put so that .        Application of Fourier Transform to the solution of One Dimensional Equation  As Fourier transform method is very useful to find the solutoin of partial differential equation, we can use it solve diffusion equation, wave equation, and heat flow equation in boundary vlaue conditions.    Solve (heat flow or diffusion equation) where and also is bounded.    As is given we can apply sine transform to the given equation so that or, or, or,  as ]  as , for . Or,   The solution of this equation is To find , set in equation , then or, or, substituting this value of in equation , we have applying inverse Fourier sine transform, we have -       Solve where and     The given equation is and Now, equation becomes or, or, or, This is a second order differential equation. whose solution is given as Imposing the initial condition in equation  Also, from equation , , we have Therefore, from equations and , we have now, differentiating equation and , we get - or,  Hence, [from equations , , and ] Now, the inverse Fourier transform is  [from eqn. ]    This is the general solution of wave equation. [from Dirac Delta function] and       Find the Fourier sine and cosine transform of .     Differentiating w.r.t. 's', we get- Integrating w.r.t. 's', we get -      "
},
{
  "id": "sec_sixth-examplesA-2",
  "level": "2",
  "url": "sec_sixth-examplesA.html#sec_sixth-examplesA-2",
  "type": "Example",
  "number": "6.2.1",
  "title": "",
  "body": "  Find the Fourier Transform of     Fourier transform of is         "
},
{
  "id": "sec_sixth-examplesA-3",
  "level": "2",
  "url": "sec_sixth-examplesA.html#sec_sixth-examplesA-3",
  "type": "Example",
  "number": "6.2.2",
  "title": "",
  "body": "  Find the Fourier transform of defined by and hence evalute            we have        Again, if then  but, from   or,  equating real parts on both sides, we get -   Also, if then from expression we have [for and ] Or, or,    "
},
{
  "id": "sec_sixth-examplesA-4",
  "level": "2",
  "url": "sec_sixth-examplesA.html#sec_sixth-examplesA-4",
  "type": "Example",
  "number": "6.2.3",
  "title": "",
  "body": "  Find     Given that               "
},
{
  "id": "sec_sixth-examplesA-5",
  "level": "2",
  "url": "sec_sixth-examplesA.html#sec_sixth-examplesA-5",
  "type": "Example",
  "number": "6.2.4",
  "title": "",
  "body": "  Find the Fourier sine and cosine transform of .        similarly Fourier cosine transform can be obtained.   "
},
{
  "id": "sec_sixth-examplesA-6",
  "level": "2",
  "url": "sec_sixth-examplesA.html#sec_sixth-examplesA-6",
  "type": "Example",
  "number": "6.2.5",
  "title": "",
  "body": "  Find Fourier sine and cosine transform of     we have  and     "
},
{
  "id": "sec_sixth-examplesA-7",
  "level": "2",
  "url": "sec_sixth-examplesA.html#sec_sixth-examplesA-7",
  "type": "Example",
  "number": "6.2.6",
  "title": "",
  "body": "  Find and if     we have           "
},
{
  "id": "sec_sixth-examplesA-8",
  "level": "2",
  "url": "sec_sixth-examplesA.html#sec_sixth-examplesA-8",
  "type": "Example",
  "number": "6.2.7",
  "title": "",
  "body": "  Find the Fourier Cosine transform of .    By definition Now, differentiating w.r.t. 's', we get -   or, or, on integrating, we get - or, when s =0, putting this value in eqn. , we get -     "
},
{
  "id": "sec_sixth-examplesA-9",
  "level": "2",
  "url": "sec_sixth-examplesA.html#sec_sixth-examplesA-9",
  "type": "Example",
  "number": "6.2.8",
  "title": "",
  "body": "  Show that Fourier transform of is its own Fourier transform.    we have    put so that . [ ] Hence, is its own Fourier transform.   "
},
{
  "id": "sec_sixth-examplesA-10",
  "level": "2",
  "url": "sec_sixth-examplesA.html#sec_sixth-examplesA-10",
  "type": "Example",
  "number": "6.2.9",
  "title": "",
  "body": "  Find .         "
},
{
  "id": "sec_sixth-examplesA-11",
  "level": "2",
  "url": "sec_sixth-examplesA.html#sec_sixth-examplesA-11",
  "type": "Example",
  "number": "6.2.10",
  "title": "",
  "body": "  Find complex Fourier transform of .             "
},
{
  "id": "sec_sixth-examplesA-12",
  "level": "2",
  "url": "sec_sixth-examplesA.html#sec_sixth-examplesA-12",
  "type": "Example",
  "number": "6.2.11",
  "title": "",
  "body": "  Find the Fourier sine transform of the function              "
},
{
  "id": "sec_sixth-examplesA-13",
  "level": "2",
  "url": "sec_sixth-examplesA.html#sec_sixth-examplesA-13",
  "type": "Example",
  "number": "6.2.12",
  "title": "",
  "body": "  Find the Fourier sine and cosine transform of .      Let put so that .      "
},
{
  "id": "sec_sixth-examplesA-14-3",
  "level": "2",
  "url": "sec_sixth-examplesA.html#sec_sixth-examplesA-14-3",
  "type": "Example",
  "number": "6.2.13",
  "title": "",
  "body": "  Solve (heat flow or diffusion equation) where and also is bounded.    As is given we can apply sine transform to the given equation so that or, or, or,  as ]  as , for . Or,   The solution of this equation is To find , set in equation , then or, or, substituting this value of in equation , we have applying inverse Fourier sine transform, we have -    "
},
{
  "id": "sec_sixth-examplesA-14-4",
  "level": "2",
  "url": "sec_sixth-examplesA.html#sec_sixth-examplesA-14-4",
  "type": "Example",
  "number": "6.2.14",
  "title": "",
  "body": "  Solve where and     The given equation is and Now, equation becomes or, or, or, This is a second order differential equation. whose solution is given as Imposing the initial condition in equation  Also, from equation , , we have Therefore, from equations and , we have now, differentiating equation and , we get - or,  Hence, [from equations , , and ] Now, the inverse Fourier transform is  [from eqn. ]    This is the general solution of wave equation. [from Dirac Delta function] and    "
},
{
  "id": "sec_sixth-examplesA-14-5",
  "level": "2",
  "url": "sec_sixth-examplesA.html#sec_sixth-examplesA-14-5",
  "type": "Example",
  "number": "6.2.15",
  "title": "",
  "body": "  Find the Fourier sine and cosine transform of .     Differentiating w.r.t. 's', we get- Integrating w.r.t. 's', we get -    "
},
{
  "id": "subsec-Prop_LapTrans",
  "level": "1",
  "url": "subsec-Prop_LapTrans.html",
  "type": "Subsection",
  "number": "6.3.1",
  "title": "Properties of Laplace Transforms",
  "body": " Properties of Laplace Transforms   The Laplace transform has several properties that make it a powerful tool for solving differential equations and studying linear time-invariant systems. Some of the key properties include:  Linearity: , where 'a' and 'b' are constants.  Shifting: , which represents a time shift of 'a' units.  Differentiation: , where f'(t) represents the derivative of f(t).  Integration: , where the integral represents the indefinite integral of f(t) with respect to t.  Convolution: , where * denotes convolution.      Linear Property            First-Shifting Property  If then .   [ ]     Inverse Laplace Transforms  If then is called the inverse Laplace Transform of and we write . Here is called the inverse Laplace Transform operator.   "
},
{
  "id": "subsubsec-Lap_linear-2-2",
  "level": "2",
  "url": "subsec-Prop_LapTrans.html#subsubsec-Lap_linear-2-2",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": "    "
},
{
  "id": "subsubsec-Ishift-2-3",
  "level": "2",
  "url": "subsec-Prop_LapTrans.html#subsubsec-Ishift-2-3",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": "  [ ] "
},
{
  "id": "subsec-derv_LT",
  "level": "1",
  "url": "subsec-derv_LT.html",
  "type": "Subsection",
  "number": "6.3.2",
  "title": "Laplace Transform of the Derivative of <span class=\"process-math\">\\(f(t)\\)<\/span>",
  "body": " Laplace Transform of the Derivative of   If then    we have        Laplace Transform of Derivative of order      we have, replacing by and by in equation , we get -  Similarly,       Laplace Transform of Integral of  If , then    Let then and Now or, or,     "
},
{
  "id": "subsec-derv_LT-2-2",
  "level": "2",
  "url": "subsec-derv_LT.html#subsec-derv_LT-2-2",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " we have     "
},
{
  "id": "subsubsec-nderv_LT-3",
  "level": "2",
  "url": "subsec-derv_LT.html#subsubsec-nderv_LT-3",
  "type": "Proof",
  "number": "6.3.2.1.1",
  "title": "",
  "body": " we have, replacing by and by in equation , we get -  Similarly,    "
},
{
  "id": "subsubsec-Int_LT-3",
  "level": "2",
  "url": "subsec-derv_LT.html#subsubsec-Int_LT-3",
  "type": "Proof",
  "number": "6.3.2.2.1",
  "title": "",
  "body": " Let then and Now or, or,   "
},
{
  "id": "subsec-Prod_LT",
  "level": "1",
  "url": "subsec-Prod_LT.html",
  "type": "Subsection",
  "number": "6.3.3",
  "title": "Laplace Transform of <span class=\"process-math\">\\(t^{n}f(t)\\)<\/span>",
  "body": " Laplace Transform of  If , then     Differentiating equation , w. r. t. 's', we get -  or, Similarly, or,      "
},
{
  "id": "subsec-Prod_LT-3",
  "level": "2",
  "url": "subsec-Prod_LT.html#subsec-Prod_LT-3",
  "type": "Proof",
  "number": "6.3.3.1",
  "title": "",
  "body": "  Differentiating equation , w. r. t. 's', we get -  or, Similarly, or,     "
},
{
  "id": "subsec-scale_LT",
  "level": "1",
  "url": "subsec-scale_LT.html",
  "type": "Subsection",
  "number": "6.3.4",
  "title": "The Change of Scale Property",
  "body": " The Change of Scale Property  If then    We have, or, put so that . where .   "
},
{
  "id": "subsec-scale_LT-3",
  "level": "2",
  "url": "subsec-scale_LT.html#subsec-scale_LT-3",
  "type": "Proof",
  "number": "6.3.4.1",
  "title": "",
  "body": " We have, or, put so that . where .  "
},
{
  "id": "subsec-frac_LT",
  "level": "1",
  "url": "subsec-frac_LT.html",
  "type": "Subsection",
  "number": "6.3.5",
  "title": "Laplace Transform of <span class=\"process-math\">\\(\\frac{1}{t}f(t)\\)<\/span>",
  "body": " Laplace Transform of  If , then     Integrating equation w.r.t. 's', we get -    i.e.,    "
},
{
  "id": "subsec-frac_LT-3",
  "level": "2",
  "url": "subsec-frac_LT.html#subsec-frac_LT-3",
  "type": "Proof",
  "number": "6.3.5.1",
  "title": "",
  "body": "  Integrating equation w.r.t. 's', we get -    i.e.,   "
},
{
  "id": "sec_sixth-examplesB",
  "level": "1",
  "url": "sec_sixth-examplesB.html",
  "type": "Section",
  "number": "6.4",
  "title": "ExamplesB",
  "body": " ExamplesB    Find the Laplace transform of .             Find the Laplace transform of .     Now,  (see problem )      Find the Laplace transform of .      (see formula 8 in )        Find the Laplace Transform of .             Find .             Find the inverse transform of .    Let us convert the given function into partial fractions.        Find                 Find      or,      putting, , we get - , again, put , we get - , equating the coefficient of on both sides of equation , we have, or, equating the coefficient of on both sides of equation , we get- or, . On putting in equation , we get -       Find     Here, or, now, and  or, or,  again, or,   Hence,         Find the inverse Laplace Transform of .    We have or, or, i.e.,       Find the inverse Laplace transform of .    We have or,   or,         Find     Find            Find the Laplace Transform of .     or,       Find .     or, or,           Find the inverse Laplace Transfoem of the function,     Let we know that,  or, or,       Find .    Let we know that  or,        Find the Laplace Transform of .     Now,         Find the Laplace Transform of .     or,    again    Integrating by parts, we have            "
},
{
  "id": "Lap_Q1",
  "level": "2",
  "url": "sec_sixth-examplesB.html#Lap_Q1",
  "type": "Example",
  "number": "6.4.1",
  "title": "",
  "body": "  Find the Laplace transform of .          "
},
{
  "id": "sec_sixth-examplesB-3",
  "level": "2",
  "url": "sec_sixth-examplesB.html#sec_sixth-examplesB-3",
  "type": "Example",
  "number": "6.4.2",
  "title": "",
  "body": "  Find the Laplace transform of .     Now,  (see problem )   "
},
{
  "id": "sec_sixth-examplesB-4",
  "level": "2",
  "url": "sec_sixth-examplesB.html#sec_sixth-examplesB-4",
  "type": "Example",
  "number": "6.4.3",
  "title": "",
  "body": "  Find the Laplace transform of .      (see formula 8 in )     "
},
{
  "id": "sec_sixth-examplesB-5",
  "level": "2",
  "url": "sec_sixth-examplesB.html#sec_sixth-examplesB-5",
  "type": "Example",
  "number": "6.4.4",
  "title": "",
  "body": "  Find the Laplace Transform of .          "
},
{
  "id": "sec_sixth-examplesB-6",
  "level": "2",
  "url": "sec_sixth-examplesB.html#sec_sixth-examplesB-6",
  "type": "Example",
  "number": "6.4.5",
  "title": "",
  "body": "  Find .          "
},
{
  "id": "sec_sixth-examplesB-7",
  "level": "2",
  "url": "sec_sixth-examplesB.html#sec_sixth-examplesB-7",
  "type": "Example",
  "number": "6.4.6",
  "title": "",
  "body": "  Find the inverse transform of .    Let us convert the given function into partial fractions.     "
},
{
  "id": "sec_sixth-examplesB-8",
  "level": "2",
  "url": "sec_sixth-examplesB.html#sec_sixth-examplesB-8",
  "type": "Example",
  "number": "6.4.7",
  "title": "",
  "body": "  Find              "
},
{
  "id": "sec_sixth-examplesB-9",
  "level": "2",
  "url": "sec_sixth-examplesB.html#sec_sixth-examplesB-9",
  "type": "Example",
  "number": "6.4.8",
  "title": "",
  "body": "  Find      or,      putting, , we get - , again, put , we get - , equating the coefficient of on both sides of equation , we have, or, equating the coefficient of on both sides of equation , we get- or, . On putting in equation , we get -    "
},
{
  "id": "sec_sixth-examplesB-10",
  "level": "2",
  "url": "sec_sixth-examplesB.html#sec_sixth-examplesB-10",
  "type": "Example",
  "number": "6.4.9",
  "title": "",
  "body": "  Find     Here, or, now, and  or, or,  again, or,   Hence,      "
},
{
  "id": "sec_sixth-examplesB-11",
  "level": "2",
  "url": "sec_sixth-examplesB.html#sec_sixth-examplesB-11",
  "type": "Example",
  "number": "6.4.10",
  "title": "",
  "body": "  Find the inverse Laplace Transform of .    We have or, or, i.e.,    "
},
{
  "id": "sec_sixth-examplesB-12",
  "level": "2",
  "url": "sec_sixth-examplesB.html#sec_sixth-examplesB-12",
  "type": "Example",
  "number": "6.4.11",
  "title": "",
  "body": "  Find the inverse Laplace transform of .    We have or,   or,      "
},
{
  "id": "sec_sixth-examplesB-13",
  "level": "2",
  "url": "sec_sixth-examplesB.html#sec_sixth-examplesB-13",
  "type": "Example",
  "number": "6.4.12",
  "title": "",
  "body": "  Find     Find         "
},
{
  "id": "sec_sixth-examplesB-14",
  "level": "2",
  "url": "sec_sixth-examplesB.html#sec_sixth-examplesB-14",
  "type": "Example",
  "number": "6.4.13",
  "title": "",
  "body": "  Find the Laplace Transform of .     or,    "
},
{
  "id": "sec_sixth-examplesB-15",
  "level": "2",
  "url": "sec_sixth-examplesB.html#sec_sixth-examplesB-15",
  "type": "Example",
  "number": "6.4.14",
  "title": "",
  "body": "  Find .     or, or,        "
},
{
  "id": "sec_sixth-examplesB-16",
  "level": "2",
  "url": "sec_sixth-examplesB.html#sec_sixth-examplesB-16",
  "type": "Example",
  "number": "6.4.15",
  "title": "",
  "body": "  Find the inverse Laplace Transfoem of the function,     Let we know that,  or, or,    "
},
{
  "id": "sec_sixth-examplesB-17",
  "level": "2",
  "url": "sec_sixth-examplesB.html#sec_sixth-examplesB-17",
  "type": "Example",
  "number": "6.4.16",
  "title": "",
  "body": "  Find .    Let we know that  or,     "
},
{
  "id": "sec_sixth-examplesB-18",
  "level": "2",
  "url": "sec_sixth-examplesB.html#sec_sixth-examplesB-18",
  "type": "Example",
  "number": "6.4.17",
  "title": "",
  "body": "  Find the Laplace Transform of .     Now,      "
},
{
  "id": "sec_sixth-examplesB-19",
  "level": "2",
  "url": "sec_sixth-examplesB.html#sec_sixth-examplesB-19",
  "type": "Example",
  "number": "6.4.18",
  "title": "",
  "body": "  Find the Laplace Transform of .     or,    again    Integrating by parts, we have           "
},
{
  "id": "subsec-usf_LT1",
  "level": "1",
  "url": "subsec-usf_LT1.html",
  "type": "Subsection",
  "number": "6.5.1",
  "title": "Unit Step Function",
  "body": " Unit Step Function   Unit step function      unit step function With the help of unit step functions, we can find the inverse transform of such functions which can not be determined with the previously explained methods. The unit step functions is defined as and . The unit step function can be visulized as figure .    Laplace Transform of Unit Step Function            "
},
{
  "id": "fig-fig61",
  "level": "2",
  "url": "subsec-usf_LT1.html#fig-fig61",
  "type": "Figure",
  "number": "6.5.1",
  "title": "",
  "body": " Unit step function   "
},
{
  "id": "subsubsec-usf_LT2-3",
  "level": "2",
  "url": "subsec-usf_LT1.html#subsubsec-usf_LT2-3",
  "type": "Proof",
  "number": "6.5.1.1.1",
  "title": "",
  "body": "     "
},
{
  "id": "subsec-ssp_LT",
  "level": "1",
  "url": "subsec-ssp_LT.html",
  "type": "Subsection",
  "number": "6.5.2",
  "title": "Second-Shifting Property",
  "body": " Second-Shifting Property  If then         [put ]   "
},
{
  "id": "subsec-ssp_LT-3",
  "level": "2",
  "url": "subsec-ssp_LT.html#subsec-ssp_LT-3",
  "type": "Proof",
  "number": "6.5.2.1",
  "title": "",
  "body": "      [put ]  "
},
{
  "id": "subsec-pf_LT",
  "level": "1",
  "url": "subsec-pf_LT.html",
  "type": "Subsection",
  "number": "6.5.3",
  "title": "Priodic Functions",
  "body": " Priodic Functions  Let be a periodic function with period , then         If we put , then as is period of the given function. Thus     if . by changing into .   "
},
{
  "id": "subsec-pf_LT-3",
  "level": "2",
  "url": "subsec-pf_LT.html#subsec-pf_LT-3",
  "type": "Proof",
  "number": "6.5.3.1",
  "title": "",
  "body": "      If we put , then as is period of the given function. Thus     if . by changing into .  "
},
{
  "id": "subsec-conv_LT",
  "level": "1",
  "url": "subsec-conv_LT.html",
  "type": "Subsection",
  "number": "6.5.4",
  "title": "Convolution Theorem",
  "body": " Convolution Theorem   Convolution theorem is a mathematical operation widely used in communication physics. It is a very fine method to find the inverse of Laplace Transform. If and then, the convolution theorem can be stated as    Let Then   the integration is being done w.r.t. 'x' first and then w.r.t 't'.      The above integration is taken within the region lying below the line OP whose equation is and above OT, is taken along OT and is along OX, with O as the origin, the axes is perpendicular to each other, as shown in figure . If the order of integration is changed, the strip will be taken parallel to OT so that the limits of are from to and the limits of are from 0 to . Putting , we have .  putting the value of , we get -      Differential Equation with Variable Coefficients  see    "
},
{
  "id": "subsec-conv_LT-2-2",
  "level": "2",
  "url": "subsec-conv_LT.html#subsec-conv_LT-2-2",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Let Then   the integration is being done w.r.t. 'x' first and then w.r.t 't'.      The above integration is taken within the region lying below the line OP whose equation is and above OT, is taken along OT and is along OX, with O as the origin, the axes is perpendicular to each other, as shown in figure . If the order of integration is changed, the strip will be taken parallel to OT so that the limits of are from to and the limits of are from 0 to . Putting , we have .  putting the value of , we get -   "
},
{
  "id": "sec_sixth-examplesC",
  "level": "1",
  "url": "sec_sixth-examplesC.html",
  "type": "Section",
  "number": "6.6",
  "title": "Examples C",
  "body": " Examples C    Using Laplace Transforms, find the solution of the initial value problem. and .     Taking Laplace Transform on both sides of equation , we have - or, or, or, putting and , we get - or, or, or,          Solve and .     Taking Laplace Transform on both sides, we have - or, or, or, or, or,   Now, solving by partial fraction, we get - or, put , we get - put , we get - Now, from equation , we get -           .    we have or, or, or, or, or, or,  or, or,        Find the inverse transform of .    We know that By the second shifting theorem, we get -       Find      or,       Express the following function in terms of units step functions and find its Laplace Transform.     we have  or,       Express the following in terms of unit step function and find its Laplace Transform.      or,       Find the Laplace transform of .      or,         Find the current in the given LCR circuit, if the switch is closed at time and the initial charge on the capacitor is .    From the given circuit, we can have the equation as using Kirchhoff's voltage law. and or, where is an integration constant. At , .   . Hence, or,   Taking Laplace transform on bothe sides, we get-  or, or, or,  where and but    which is the required result for the current at any time .      Find the current in the given circuit, if the switch is connected at and disconnected at .    With reference to circuit, the conditions under which current i flows are at , i.e., Take the Laplace on both sides of the given equation, we get - or, or,  or,   on inversion, here or,     Hence,  and (by second shifting theorem.)  Therefore from equation , we get -  for , and for .        Solve the given equation of simple harmonic motion using Laplace Transform at and .    Taking Laplace transform, we have - or, or,  we know that Hence,        Find the Laplace transform of the waveform if .     or, as . Or,        Find the Laplace transform of the half wave rectifier.        we know that,          Find the Laplace transform of the saw tooth wave. for and .             A periodic square wave function in terms of unit step function is given as Show that the Laplce Transform of is given by               Use convolution theorem to find     We have, and Hence by convolution theorem,            Solve the equation, such that .    we have the equation Taking Laplace transform of equation we have or, or,  or, or, or, or, or, or, which is a linear equation of the first order, like . The integrating factor of which is or,  or, or,  Since vanishes as , hence C must vanish. or,       Prove that     Let But,        or, putting , we get the result.      Solve at and is constant.    Taking Laplace transform of the given equation, we have or, or, or, or, or, or, Integrating, we get -  Taking inverse Laplace transform,   is Bessel's function when ,   which is the required solution.    "
},
{
  "id": "sec_sixth-examplesC-2",
  "level": "2",
  "url": "sec_sixth-examplesC.html#sec_sixth-examplesC-2",
  "type": "Example",
  "number": "6.6.1",
  "title": "",
  "body": "  Using Laplace Transforms, find the solution of the initial value problem. and .     Taking Laplace Transform on both sides of equation , we have - or, or, or, putting and , we get - or, or, or,       "
},
{
  "id": "sec_sixth-examplesC-3",
  "level": "2",
  "url": "sec_sixth-examplesC.html#sec_sixth-examplesC-3",
  "type": "Example",
  "number": "6.6.2",
  "title": "",
  "body": "  Solve and .     Taking Laplace Transform on both sides, we have - or, or, or, or, or,   Now, solving by partial fraction, we get - or, put , we get - put , we get - Now, from equation , we get -       "
},
{
  "id": "sec_sixth-examplesC-4",
  "level": "2",
  "url": "sec_sixth-examplesC.html#sec_sixth-examplesC-4",
  "type": "Example",
  "number": "6.6.3",
  "title": "",
  "body": "   .    we have or, or, or, or, or, or,  or, or,     "
},
{
  "id": "sec_sixth-examplesC-5",
  "level": "2",
  "url": "sec_sixth-examplesC.html#sec_sixth-examplesC-5",
  "type": "Example",
  "number": "6.6.4",
  "title": "",
  "body": "  Find the inverse transform of .    We know that By the second shifting theorem, we get -    "
},
{
  "id": "sec_sixth-examplesC-6",
  "level": "2",
  "url": "sec_sixth-examplesC.html#sec_sixth-examplesC-6",
  "type": "Example",
  "number": "6.6.5",
  "title": "",
  "body": "  Find      or,    "
},
{
  "id": "sec_sixth-examplesC-7",
  "level": "2",
  "url": "sec_sixth-examplesC.html#sec_sixth-examplesC-7",
  "type": "Example",
  "number": "6.6.6",
  "title": "",
  "body": "  Express the following function in terms of units step functions and find its Laplace Transform.     we have  or,    "
},
{
  "id": "sec_sixth-examplesC-8",
  "level": "2",
  "url": "sec_sixth-examplesC.html#sec_sixth-examplesC-8",
  "type": "Example",
  "number": "6.6.7",
  "title": "",
  "body": "  Express the following in terms of unit step function and find its Laplace Transform.      or,    "
},
{
  "id": "sec_sixth-examplesC-9",
  "level": "2",
  "url": "sec_sixth-examplesC.html#sec_sixth-examplesC-9",
  "type": "Example",
  "number": "6.6.8",
  "title": "",
  "body": "  Find the Laplace transform of .      or,      "
},
{
  "id": "sec_sixth-examplesC-10",
  "level": "2",
  "url": "sec_sixth-examplesC.html#sec_sixth-examplesC-10",
  "type": "Example",
  "number": "6.6.9",
  "title": "",
  "body": "  Find the current in the given LCR circuit, if the switch is closed at time and the initial charge on the capacitor is .    From the given circuit, we can have the equation as using Kirchhoff's voltage law. and or, where is an integration constant. At , .   . Hence, or,   Taking Laplace transform on bothe sides, we get-  or, or, or,  where and but    which is the required result for the current at any time .   "
},
{
  "id": "sec_sixth-examplesC-11",
  "level": "2",
  "url": "sec_sixth-examplesC.html#sec_sixth-examplesC-11",
  "type": "Example",
  "number": "6.6.10",
  "title": "",
  "body": "  Find the current in the given circuit, if the switch is connected at and disconnected at .    With reference to circuit, the conditions under which current i flows are at , i.e., Take the Laplace on both sides of the given equation, we get - or, or,  or,   on inversion, here or,     Hence,  and (by second shifting theorem.)  Therefore from equation , we get -  for , and for .     "
},
{
  "id": "sec_sixth-examplesC-12",
  "level": "2",
  "url": "sec_sixth-examplesC.html#sec_sixth-examplesC-12",
  "type": "Example",
  "number": "6.6.11",
  "title": "",
  "body": "  Solve the given equation of simple harmonic motion using Laplace Transform at and .    Taking Laplace transform, we have - or, or,  we know that Hence,     "
},
{
  "id": "sec_sixth-examplesC-13",
  "level": "2",
  "url": "sec_sixth-examplesC.html#sec_sixth-examplesC-13",
  "type": "Example",
  "number": "6.6.12",
  "title": "",
  "body": "  Find the Laplace transform of the waveform if .     or, as . Or,     "
},
{
  "id": "sec_sixth-examplesC-14",
  "level": "2",
  "url": "sec_sixth-examplesC.html#sec_sixth-examplesC-14",
  "type": "Example",
  "number": "6.6.13",
  "title": "",
  "body": "  Find the Laplace transform of the half wave rectifier.        we know that,       "
},
{
  "id": "sec_sixth-examplesC-15",
  "level": "2",
  "url": "sec_sixth-examplesC.html#sec_sixth-examplesC-15",
  "type": "Example",
  "number": "6.6.14",
  "title": "",
  "body": "  Find the Laplace transform of the saw tooth wave. for and .          "
},
{
  "id": "sec_sixth-examplesC-16",
  "level": "2",
  "url": "sec_sixth-examplesC.html#sec_sixth-examplesC-16",
  "type": "Example",
  "number": "6.6.15",
  "title": "",
  "body": "  A periodic square wave function in terms of unit step function is given as Show that the Laplce Transform of is given by            "
},
{
  "id": "sec_sixth-examplesC-17",
  "level": "2",
  "url": "sec_sixth-examplesC.html#sec_sixth-examplesC-17",
  "type": "Example",
  "number": "6.6.16",
  "title": "",
  "body": "  Use convolution theorem to find     We have, and Hence by convolution theorem,         "
},
{
  "id": "sec_sixth-examplesC-18",
  "level": "2",
  "url": "sec_sixth-examplesC.html#sec_sixth-examplesC-18",
  "type": "Example",
  "number": "6.6.17",
  "title": "",
  "body": "  Solve the equation, such that .    we have the equation Taking Laplace transform of equation we have or, or,  or, or, or, or, or, or, which is a linear equation of the first order, like . The integrating factor of which is or,  or, or,  Since vanishes as , hence C must vanish. or,    "
},
{
  "id": "sec_sixth-examplesC-19",
  "level": "2",
  "url": "sec_sixth-examplesC.html#sec_sixth-examplesC-19",
  "type": "Example",
  "number": "6.6.18",
  "title": "",
  "body": "  Prove that     Let But,        or, putting , we get the result.   "
},
{
  "id": "sec_sixth-examplesC-20",
  "level": "2",
  "url": "sec_sixth-examplesC.html#sec_sixth-examplesC-20",
  "type": "Example",
  "number": "6.6.19",
  "title": "",
  "body": "  Solve at and is constant.    Taking Laplace transform of the given equation, we have or, or, or, or, or, or, Integrating, we get -  Taking inverse Laplace transform,   is Bessel's function when ,   which is the required solution.   "
},
{
  "id": "ex_sixth",
  "level": "1",
  "url": "ex_sixth.html",
  "type": "Exercises",
  "number": "6.7",
  "title": "Exercise",
  "body": "  Exercise  Calculate the cosine transform of .   .   Find cosine transform of function such that       Calculate the cosine and sine transforms of , where b is a positive integer.   and    Find the Fourier complex transform of , if       Find       Evaluate       Find the Laplace Transform of defined as       Find       Find inverse Laplace transform of .      Evaluate       Use convolution theorem to find       Using Laplace transform, solve the following differential equation where at .      Prove that   "
},
{
  "id": "ex_sixth-2",
  "level": "2",
  "url": "ex_sixth.html#ex_sixth-2",
  "type": "Exercise",
  "number": "6.7.1",
  "title": "",
  "body": "Calculate the cosine transform of .   .  "
},
{
  "id": "ex_sixth-3",
  "level": "2",
  "url": "ex_sixth.html#ex_sixth-3",
  "type": "Exercise",
  "number": "6.7.2",
  "title": "",
  "body": "Find cosine transform of function such that      "
},
{
  "id": "ex_sixth-4",
  "level": "2",
  "url": "ex_sixth.html#ex_sixth-4",
  "type": "Exercise",
  "number": "6.7.3",
  "title": "",
  "body": "Calculate the cosine and sine transforms of , where b is a positive integer.   and   "
},
{
  "id": "ex_sixth-5",
  "level": "2",
  "url": "ex_sixth.html#ex_sixth-5",
  "type": "Exercise",
  "number": "6.7.4",
  "title": "",
  "body": "Find the Fourier complex transform of , if      "
},
{
  "id": "ex_sixth-6",
  "level": "2",
  "url": "ex_sixth.html#ex_sixth-6",
  "type": "Exercise",
  "number": "6.7.5",
  "title": "",
  "body": "Find      "
},
{
  "id": "ex_sixth-7",
  "level": "2",
  "url": "ex_sixth.html#ex_sixth-7",
  "type": "Exercise",
  "number": "6.7.6",
  "title": "",
  "body": "Evaluate      "
},
{
  "id": "ex_sixth-8",
  "level": "2",
  "url": "ex_sixth.html#ex_sixth-8",
  "type": "Exercise",
  "number": "6.7.7",
  "title": "",
  "body": "Find the Laplace Transform of defined as      "
},
{
  "id": "ex_sixth-9",
  "level": "2",
  "url": "ex_sixth.html#ex_sixth-9",
  "type": "Exercise",
  "number": "6.7.8",
  "title": "",
  "body": "Find      "
},
{
  "id": "ex_sixth-10",
  "level": "2",
  "url": "ex_sixth.html#ex_sixth-10",
  "type": "Exercise",
  "number": "6.7.9",
  "title": "",
  "body": "Find inverse Laplace transform of .     "
},
{
  "id": "ex_sixth-11",
  "level": "2",
  "url": "ex_sixth.html#ex_sixth-11",
  "type": "Exercise",
  "number": "6.7.10",
  "title": "",
  "body": "Evaluate      "
},
{
  "id": "ex_sixth-12",
  "level": "2",
  "url": "ex_sixth.html#ex_sixth-12",
  "type": "Exercise",
  "number": "6.7.11",
  "title": "",
  "body": "Use convolution theorem to find      "
},
{
  "id": "ex_sixth-13",
  "level": "2",
  "url": "ex_sixth.html#ex_sixth-13",
  "type": "Exercise",
  "number": "6.7.12",
  "title": "",
  "body": "Using Laplace transform, solve the following differential equation where at .     "
},
{
  "id": "ex_sixth-14",
  "level": "2",
  "url": "ex_sixth.html#ex_sixth-14",
  "type": "Exercise",
  "number": "6.7.13",
  "title": "",
  "body": "Prove that  "
},
{
  "id": "subsec-sol_vs",
  "level": "1",
  "url": "subsec-sol_vs.html",
  "type": "Subsection",
  "number": "7.1.1",
  "title": "Solution of Wave Equation for Vibrating String",
  "body": " Solution of Wave Equation for Vibrating String   vibrating string Let us consider an elastic string of length tightly stretched between points O and P, as shown in figure . If y be the displacement of string at point A(x,y) at any time t, then the wave equation for a vibrating string is given by where is a constant. Equation shows that the displacement y is a function of x and t, i.e., hence from the method of separation of variables, the solution for equation is where is a function of only and is a function of only. Now and or, substituting these values in equation , we get - or, This is because each side of equation contains only one variable which is possible if each side must be seperately equal to some constant, say, . Now, according to the value of there arises three cases.       Case I. When , we have from equation ,    Case II. when , for simplicity assume .    Case III. when , i.e., (say),   The boundary conditions are the initial conditions are   Imposing the boundary conditions on case I and II, we obtain for . So equations and fail to give the solution of equation and hence an equation is only capable to provide the complete solution of equation as it is periodic in and . Therefore with the case III the equation becomes - or, from equation , at  for any arbitrary time.  Hence equation becomes or, from equation  at or,  . or, where ( otherwise ,the case I.)  Therefore equation becomes -  by replacing and . Imposing the initial condition from equation in equation , we get - Now, differentiating equation w. r. t. 't', we get - from equation , we have    The motion of string is harmonic because the damping motion of the string is neglected by assuming the small displacement of string hence there are number of solutions obtained for equation . Therefore the desired solution is given by summing the equation for to , i.e., Now, the constants and are determined by multiplying equations and on both sides by and then integrating from to , from equation ,   from equation , By substituting the value of and in equation , we get the complete solution of equation .   Note: If we assume the initial velocity of the string , then from equation we have . Thus equation reduces to    which is the solution of equation , where the function is odd and periodic in period .  "
},
{
  "id": "fig-fig72",
  "level": "2",
  "url": "subsec-sol_vs.html#fig-fig72",
  "type": "Figure",
  "number": "7.1.2",
  "title": "",
  "body": "   "
},
{
  "id": "subsec-sol_vs-4",
  "level": "2",
  "url": "subsec-sol_vs.html#subsec-sol_vs-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Case I. "
},
{
  "id": "subsec-sol_vs-5",
  "level": "2",
  "url": "subsec-sol_vs.html#subsec-sol_vs-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Case II. "
},
{
  "id": "subsec-sol_vs-6",
  "level": "2",
  "url": "subsec-sol_vs.html#subsec-sol_vs-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Case III. "
},
{
  "id": "subsec-sol_vs-12",
  "level": "2",
  "url": "subsec-sol_vs.html#subsec-sol_vs-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Note: "
},
{
  "id": "subsec-dalembert",
  "level": "1",
  "url": "subsec-dalembert.html",
  "type": "Subsection",
  "number": "7.1.2",
  "title": "D’Alembert’s Solution of Vibrating String",
  "body": " D'Alembert's Solution of Vibrating String  The equation of vibrating string is given by The solution of equation may be obtained by changing the variable and in the other parameters as , and , so that or, at constant . Or, In operator form and  also at constant . Or, i.e., and  Substituting the values of equation and in equation , we get - Integrating this expression with respect to , we get - or,   Integrating it again w. r. t. 'p', we get -  This is a D' Alembert's solution D'Alembert's solution of one - dimensional wave equation . Physically equation represents two plane waves travelling in opposite directions with the same velocity and same period. Verification of equation with the help of boundary conditions and the initial conditions and from equation , we have using equation , equation becomes and using equation in equation , we get - assuming , we have from equation , or, which on integrating gives putting equation , in equation , we get - and with the help of equations and , equation yields which reduces to and It follows from equations and that the function is odd and periodic with period and hence equation is the solution of equation .  "
},
{
  "id": "subsec-2Dwaveeqn",
  "level": "1",
  "url": "subsec-2Dwaveeqn.html",
  "type": "Subsection",
  "number": "7.1.3",
  "title": "Two Dimensional Wave Equation for Vibrating Membrane",
  "body": " Two Dimensional Wave Equation for Vibrating Membrane      Let us consider a thin elastic membrane stretched in xy- plane by a uniform tension T per unit length and A' B' C' D' be the disturbed position of an element of this membrane from its initial position, as shown in figure . Since the deflection of the membrane and angles of inclination of the tensions are small, the sides of the element A' B' C' D' are approximately equall to and , the initial lengths of the element. As the membrane is assumed to be perfactly flexible the tensions acting on the membrane are all tangential. If and , the inclenations of these tensions with the horizontal are small, the components of these forces at the pair of opposite edges B' C' and A' D' are and are approximately equal and opposite in direction as . Similarly, considering the other pair of edges A' B' and C' D', we observe that the horizontal components of the forces will be approximately equal and opposite. Thereby we conclude that the motion of the particles of the membrane in horizontal direction is negligibly small, i. e., each particle of the membrane moves vertically. The resultant vertical force on the parallel edges B' C' and A' D' are  and as and are small]. where and are the values of y between and . Similarly the resultant vertical force acting on the other two edges   where and are the values of x between and . Hence the total force acting on the elemenrt in the vertical direction is If be the mass per unit area of the membrane then mass of this element = .  As area of the element A' B' C' D' = and acceleration of the element in a direction perpendicular to plane is . Hence from Newton's second law of motion, we have -  or,  [ and ] Proceeding to the limits as , , we get - where  where and . here is the velocity of wave propagating in and direction. The equation is called two - dimensional wave equation.   Note. The three - dimensional wave equation is where   "
},
{
  "id": "fig-fig74",
  "level": "2",
  "url": "subsec-2Dwaveeqn.html#fig-fig74",
  "type": "Figure",
  "number": "7.1.3",
  "title": "",
  "body": "   "
},
{
  "id": "subsec-2Dwaveeqn-6",
  "level": "2",
  "url": "subsec-2Dwaveeqn.html#subsec-2Dwaveeqn-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Note. "
},
{
  "id": "subsec-2Dwave_sol",
  "level": "1",
  "url": "subsec-2Dwave_sol.html",
  "type": "Subsection",
  "number": "7.1.4",
  "title": "Solution of Two Dimensional Wave Equation",
  "body": " Solution of Two Dimensional Wave Equation   The two - dimensional wave equation is given as The equation can be solved by the method of separation of variables for two cases, one, when the membrane is a rectangle and second, when it is a circle.    Rectangular Membrane   wave equation To solve equation , let be the initial velocity, be the initial displacement, and the following are the boundary conditions where and are sides of the membrane along X and Y axes, respectively, as shown in figure .      Let be the solution of equation . Hence from equation , equation becomes - or,    Case - I when constant is zero.    Case - II when constant is positive. where    Case - III when constant is negative. where .  Considering the case I and II with the given boundary conditions give no solution, hence only case III will be able to give the solution. From case III, we have  or,  or,    i.e., and  .  and  or, Hence the appropriate solution of two-dimensional wave equation can be taken as  where, and are another constants. where These functions are called eigen function or characteristics functions and the numbers are called the eigen values of rectangular vibrating membrane. The frequency of is ( ).  Now imploying the initial conditions in equation , we get- This series is known as double Fourier series of   Now using equation and , we get - This is again a double Fourier sine series. or,   Hence the solution of the wave equation is given by equation with the coefficients and as given by equations and , respectively.   Special Case. when initial velocity vanishes, i.e., which implies Therefore, the solution of wave equation is given by where     Circular Membrane       wave equation Consider the vibration of the circular membrane of radius . The vibrations of a circular membrane are governed by the two-dimensional wave equation Using polar coordinates as the wave equation is transformed into (see )  The boundary conditions are , , ; the initial conditions are the initial velocity; the initial displacement; where and Let be the solution of equation . Hence with help of equation , equation becomes - or,  now taking or, we get- or, Also, we have - i.e.,   Hence equations , and are the ordinary differential equation for , and , respectively. The solution of equation is of the form Now taking , we get - and therefore equation gives  which is Bessel's equation and hence its general solution is But the deflection of the membrane is finite when as , so we can not make use of and must take . Thus equation reduces to Now using the boundary condition, we have which implies ; otherwise if or, causes . assuming be the positive roots of equation , the general solution of equation is with the help of equations , , and the required oscillation has the form Trying superposition and using distinct values of constants A and B for each choice of and , the general solution of equation may be taken as  which satisfies the boundary condition . In this case equation is radially symmetrical i.e., the solution is independent of , we have from equation by putting . where are the positive roots of .  Now from equation and the boundary condition when , we have  becomes when it is independent of ]. Therefore must be the coefficient of Fourier - Bessel series, which represents in terms of i.e., Also, from or,  being independent of . Hence, Substituting these values of and from equations and in equation , we get the solution for the vibrations of circular membrane in the case when displacements are independent of .    Three Dimensional Wave Equation  The three - dimensional wave equation is given by where The solution of which can be obtained under the conditions                        Let be the solution of equation . Hence, making use of equation , equation becomes - here variables have been separated. Hence each of the four terms in this equation must be constant say  and so that   Now, we get -  and where all are arbitrary constants. Hence the solution of equation, is  we can also write the solution ofequation in the form where we have or, when that implies etc.  Then The result may be deduced from equation , since, when etc. According to boundary condition i., we have - i.e., or, and being an integer. Similarly, and  now, equation reduces to Hence the general solution of equation is     "
},
{
  "id": "fig-fig75",
  "level": "2",
  "url": "subsec-2Dwave_sol.html#fig-fig75",
  "type": "Figure",
  "number": "7.1.4",
  "title": "",
  "body": "   "
},
{
  "id": "subsubsec-rect_memb-5",
  "level": "2",
  "url": "subsec-2Dwave_sol.html#subsubsec-rect_memb-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Case - I "
},
{
  "id": "subsubsec-rect_memb-6",
  "level": "2",
  "url": "subsec-2Dwave_sol.html#subsubsec-rect_memb-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Case - II "
},
{
  "id": "subsubsec-rect_memb-7",
  "level": "2",
  "url": "subsec-2Dwave_sol.html#subsubsec-rect_memb-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Case - III "
},
{
  "id": "subsubsec-rect_memb-12",
  "level": "2",
  "url": "subsec-2Dwave_sol.html#subsubsec-rect_memb-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Special Case. "
},
{
  "id": "fig-fig76",
  "level": "2",
  "url": "subsec-2Dwave_sol.html#fig-fig76",
  "type": "Figure",
  "number": "7.1.5",
  "title": "",
  "body": "   "
},
{
  "id": "sec_seventh-examplesA",
  "level": "1",
  "url": "sec_seventh-examplesA.html",
  "type": "Section",
  "number": "7.2",
  "title": "Examples A",
  "body": " Examples A    Find the solution of the wave equation such that is a constant) when and when .    The wave equation is Let us assume its solution as so that and also and Substituting these values in eqn. (i), we get - or, or, and Now, auxiliary equations are - , or, and or, . Thus [from eqn. ]. Put when , we have Hence, eqn. (iii) reduces to or, put when , equating the coefficients of and on both sides, we get -  and Hence, eqn. becomes -       A string is stretched between two points (0,0) and (l,0) and then released at rest from the positions . Show that the displacement of any point at a distance from one end at a time is given by     The vibration of string is given by The boundary conditions are the initial conditions are and the initial transverse velocity of any point of the string at is Now, the solution of eqn. is in the form with the help of eqn. , Hence, also from eqn. , we have or, or,  Hence, eqn. becomes Again, with the help of eqn. ,  or, if , eqn. will lead to the trivial solution . Therefore, the only possibility is that the . Thus eqn. reduces to Finally, imposing the condition , we have on putting the values of and in eqn. , we get -       A tightly stretched string with fixed end points and is initially in a position given by . If it is released from rest from this position, find the displacement .    Let the equation of vibrating string is here, the initial conditions are and and the boundary conditions are . The solution of eqn. is of the form, Now, Hence, eqn. becomes also, or, or, where, putting in eqn. , we get - Now,  or, Now, eqn. reduces to   But, on putting in eqn. , we have- or, equating the coefficients of on both sides, we get - Hence, eqn. becomes       If a string of length is plucked at a point aside from its end by a displacement from the mean position, find the displacement of the string at any time ?    Let us consider a string which is clamped at points A and B is pulled aside at C and then released suddenly, as shown in figure . Then the equation of vibrating string is Also, let and , therefore the displacement of particle between points A and P at time .  for the portion between points P and B at time , we have, Hence, the displacement of string at time is given by since the initial velocity of the string is zero, the solution of eqn. is given by where,         Substituting in eqn. , we get -      2D wave equation    Find the deflection of the square membrane with , if the initial velocity is zero and the initial deflection is      . The deflection of the square membrane is given by the two-dimensional wave equation The boundary conditions are given as as is the sides of the membrane. The initial conditions are   Therefore the solution of eqn. is given by where  on integration, we find that but,    on integration, we find that Also, we find          "
},
{
  "id": "sec_seventh-examplesA-2",
  "level": "2",
  "url": "sec_seventh-examplesA.html#sec_seventh-examplesA-2",
  "type": "Example",
  "number": "7.2.1",
  "title": "",
  "body": "  Find the solution of the wave equation such that is a constant) when and when .    The wave equation is Let us assume its solution as so that and also and Substituting these values in eqn. (i), we get - or, or, and Now, auxiliary equations are - , or, and or, . Thus [from eqn. ]. Put when , we have Hence, eqn. (iii) reduces to or, put when , equating the coefficients of and on both sides, we get -  and Hence, eqn. becomes -    "
},
{
  "id": "sec_seventh-examplesA-3",
  "level": "2",
  "url": "sec_seventh-examplesA.html#sec_seventh-examplesA-3",
  "type": "Example",
  "number": "7.2.2",
  "title": "",
  "body": "  A string is stretched between two points (0,0) and (l,0) and then released at rest from the positions . Show that the displacement of any point at a distance from one end at a time is given by     The vibration of string is given by The boundary conditions are the initial conditions are and the initial transverse velocity of any point of the string at is Now, the solution of eqn. is in the form with the help of eqn. , Hence, also from eqn. , we have or, or,  Hence, eqn. becomes Again, with the help of eqn. ,  or, if , eqn. will lead to the trivial solution . Therefore, the only possibility is that the . Thus eqn. reduces to Finally, imposing the condition , we have on putting the values of and in eqn. , we get -    "
},
{
  "id": "sec_seventh-examplesA-4",
  "level": "2",
  "url": "sec_seventh-examplesA.html#sec_seventh-examplesA-4",
  "type": "Example",
  "number": "7.2.3",
  "title": "",
  "body": "  A tightly stretched string with fixed end points and is initially in a position given by . If it is released from rest from this position, find the displacement .    Let the equation of vibrating string is here, the initial conditions are and and the boundary conditions are . The solution of eqn. is of the form, Now, Hence, eqn. becomes also, or, or, where, putting in eqn. , we get - Now,  or, Now, eqn. reduces to   But, on putting in eqn. , we have- or, equating the coefficients of on both sides, we get - Hence, eqn. becomes    "
},
{
  "id": "sec_seventh-examplesA-5",
  "level": "2",
  "url": "sec_seventh-examplesA.html#sec_seventh-examplesA-5",
  "type": "Example",
  "number": "7.2.4",
  "title": "",
  "body": "  If a string of length is plucked at a point aside from its end by a displacement from the mean position, find the displacement of the string at any time ?    Let us consider a string which is clamped at points A and B is pulled aside at C and then released suddenly, as shown in figure . Then the equation of vibrating string is Also, let and , therefore the displacement of particle between points A and P at time .  for the portion between points P and B at time , we have, Hence, the displacement of string at time is given by since the initial velocity of the string is zero, the solution of eqn. is given by where,         Substituting in eqn. , we get -    "
},
{
  "id": "sec_seventh-examplesA-6-2",
  "level": "2",
  "url": "sec_seventh-examplesA.html#sec_seventh-examplesA-6-2",
  "type": "Example",
  "number": "7.2.5",
  "title": "",
  "body": "  Find the deflection of the square membrane with , if the initial velocity is zero and the initial deflection is      . The deflection of the square membrane is given by the two-dimensional wave equation The boundary conditions are given as as is the sides of the membrane. The initial conditions are   Therefore the solution of eqn. is given by where  on integration, we find that but,    on integration, we find that Also, we find        "
},
{
  "id": "subsec-1D_heat",
  "level": "1",
  "url": "subsec-1D_heat.html",
  "type": "Subsection",
  "number": "7.3.1",
  "title": "One Dimensional Equation of Heat Flow",
  "body": " One Dimensional Equation of Heat Flow   The one-dimensional heat equation describes the flow of heat in a medium along a single spatial dimension. It is a partial differential equation that relates the rate of change of temperature with respect to time to the second derivative of temperature with respect to the spatial coordinate. The general form of the one-dimensional heat equation is given in . where represents the temperature at position x and time t, is the thermal diffusivity (a material-specific constant), and and denote the partial derivatives with respect to time and space, respectively. This equation describes how the temperature at a given point changes over time due to the heat flow and diffusion within the medium. The second derivative term on the right-hand side accounts for the spatial variations in temperature, while the left-hand side represents the rate of change of temperature with respect to time.  Solving the one-dimensional heat equation involves finding the temperature distribution as a function of both position and time, given the initial condition and appropriate boundary conditions that specify the temperature at the boundaries of the medium. The solution to the one-dimensional heat equation can be obtained using various analytical or numerical methods, such as separation of variables, finite difference methods, or Fourier series expansion, depending on the specific problem and boundary conditions.    If ends of a bar are at temperature zero  Consider a bar of uniform cross section of length whose both ends are maintained at temperature zero, and the initial temperature to be given as as shown in figure . If one end of the bar is fixed at the origin and distances along the bar are denoted by , then we have       The boundary conditions are for and the initial condition for . Let us assume that be the solution of equation . Hence equation becomes - or, and Therefore, solution becomes   But, again, As should not be zero, . Or, putting and in equation, , we get- put   summing over for all values of , this eqn. becomes also, we have which is Fourier sine series with     If ends of the bar are insulated  The boundary conditions of the problem are at and [for ]. and at [for ]. Then solution of equation becomes or, Putting at in equation , we get - or, , since, . Therefore, equation becomes or,   Putting at in equation , we get - or, or, where . Hence the general solution of equation becomes - put .] However, for the given boundary conditions the above solution satisfies all the values of including zero. Hence the solution of equation is given by Now, from which we can find, and     If one end of a bar at temperature and the other at temperature zero  Suppose the bar is given the constant temperature initially and face is kept at temperature zero, while the face is kept at constatn temperature for , then the boundary conditions of the problem becomes and The equation of heat flow is given by Let the solution of equation be or, and Substituting these in equation , we get - Hence, and or, Hence, This solution shows at for all but the boundary condition shows that at , a non - zero constant. Therefore, the solution though satisfies the boundary condition at does not satisfy it at . Hence we should add one more solution to this solution so that at when and at the same time it becomes zero at . Such solution may be obtained by choosing the constant equal to zero. Then equation becomes and equation reduces to Hence, solution of equation in this case is given by The complete solution of equation is thus - or, where is the temperature distribution after a long interval of time when there exists steady state of temperature and is the transient temperature which tends to zero as increases. Now, for , , and and from equation , we have - and  so that . Thus solution (7.2.1.12) reduces to which must be zero at for every value of . Thus we have . and which must give for every and hence .  Or, , where . Or, Constant may be calculated by using the initial condition . Hence, and     Temperature in an infinite bar  Let us consider an infinite bar of insulated surfaces. The initial temperature on the bar is given as The solution of one dimensional heat equaiton is given as This solution is periodic in at . But is not taken as periodic function, we shall therefore, use Fourier integral instead of Fourier series for the determination of constants and . Let us assume the arbitrary coefficients and to be the functions of i.e., and . Then  using initial condition, we have - from this equation, we get - and so that as such the equation takes the form,  which gives the required temperature at any point at any time.   "
},
{
  "id": "fig-fig79",
  "level": "2",
  "url": "subsec-1D_heat.html#fig-fig79",
  "type": "Figure",
  "number": "7.3.2",
  "title": "",
  "body": "   "
},
{
  "id": "subsec-2D_heat",
  "level": "1",
  "url": "subsec-2D_heat.html",
  "type": "Subsection",
  "number": "7.3.2",
  "title": "Two Dimensional Equation of Heat Flow",
  "body": " Two Dimensional Equation of Heat Flow      Consider the flow of heat in a metal plate of uniform thickness in the directions parallel to the breadth of the plate. The surface of the plate is insulated as shown in figure . Let be the temperature at any point of the plate at any time is given by If the edges are kept at zero temperature then the boundary conditions are and the initial condition is given as . Let us assume that be the solution of equation . Then from equation we have - or, or, and or, also,  where,  Imposing the boundary conditions, we have    at give ,     at gives ,     at i.e.,  , , ,     at i.e.,  . , .    Putting these values in equation , we get - or,  The solution now becomes -  To determine the value of constant imposing the initial condition, , we get - multiplying both sides by and integrating from 0 to and , we get -   "
},
{
  "id": "fig-fig710",
  "level": "2",
  "url": "subsec-2D_heat.html#fig-fig710",
  "type": "Figure",
  "number": "7.3.3",
  "title": "",
  "body": "   "
},
{
  "id": "subsec-Lapleqn",
  "level": "1",
  "url": "subsec-Lapleqn.html",
  "type": "Subsection",
  "number": "7.3.3",
  "title": "Laplace’s Equation",
  "body": " Laplace's Equation   The equation of heat flow in steady state is known as Laplace's equation. i.e., does not change with time. and which is a cartesian form of Laplace's equation in three dimensions.  In cylindrical coordinates, In spherical polar coordinates,    "
},
{
  "id": "subsec-2D_lapleqn",
  "level": "1",
  "url": "subsec-2D_lapleqn.html",
  "type": "Subsection",
  "number": "7.3.4",
  "title": "Two Dimensional Laplace’s Equation",
  "body": " Two Dimensional Laplace's Equation   The two-dimensional Laplace equation is a partial differential equation that describes the behavior of a scalar function in two dimensions. The general form of the two-dimensional Laplace equation is: where u is the scalar function and is the Laplacian operator. In two dimensions, the Laplacian operator can be expressed as the sum of the second partial derivatives with respect to the spatial coordinates x and y: This equation states that the sum of the second partial derivatives of the function with respect to both x and y is equal to zero. The Laplace equation is a special case of the more general Poisson equation, where a non-zero source term is present on the right-hand side:     In Cartesian Coordinates      Consider a thin plate with insulated surfaces bounded by the lines , , and . Let at steady state, the temp. at any point satisfies the equation assuming the edges and is kept at temperature zero and also the lower edge is kept at tempemperature and the edge at zero temperature.  Then solution of equation is given by Now three possible solutions of equation are   Of these, we have to choose that solution which is consistant with the physical nature of the problem. The solution and can not satisfy the boundary conditions. Therefore, possible solution is only . From the boundary condition, , we have from solution , therefore, solution reduces to using , we have - and also to satisfy the condition . Hence equation takes the form . Or, But the initial condition , we have where If the given plate is of finite length and the temp. at this end is , then the boundary conditions are and .  Let the solution of this problem is putting and in eqn. , we have hence eqn. reduces to on putting and , we have - or, or, Now equation becomes - on putting and in equation , we get - or, therefore, equation becomes or, or,  . on putting and in equation , we get - where     In Cylindrical Coordinates  The Laplace equation in two dimensional case is Let be the solution of equation , so that or,    This is a homogenous linear differential equation. Its solution can be found by putting or, or, or, Also, or, assume again,  or, from eqn. , or, or, or, or,   and Hence,   If , we have from equation , from equation , we get - Hence, But the general single - valued solution of equation for all possible value of may be written as     "
},
{
  "id": "fig-fig711",
  "level": "2",
  "url": "subsec-2D_lapleqn.html#fig-fig711",
  "type": "Figure",
  "number": "7.3.4",
  "title": "",
  "body": "   "
},
{
  "id": "subsec-3D_heat",
  "level": "1",
  "url": "subsec-3D_heat.html",
  "type": "Subsection",
  "number": "7.3.5",
  "title": "Three Dimensional Equation of Heat Flow",
  "body": " Three Dimensional Equation of Heat Flow  Three dimensional heat equation is given by the solution of which is assumed as By substitution of this in equation , we get - Now or, or, so that Yielding or, or, and Hence for all values of , the general solution of equation is    "
},
{
  "id": "subsec-3D_lapleq",
  "level": "1",
  "url": "subsec-3D_lapleq.html",
  "type": "Subsection",
  "number": "7.3.6",
  "title": "Three Dimensional Laplace’s Equation",
  "body": " Three Dimensional Laplace's Equation   The Laplace equation arises in various physical problems, including electrostatics, heat conduction, fluid flow, and potential theory. Solving the 3D Laplace equation involves finding a function that satisfies the equation . This typically involves specifying appropriate boundary conditions or constraints on the function at the boundaries of the domain. The solutions to the Laplace equation are harmonic functions, which have many interesting mathematical properties.    In Rectangular Coordinates   rectangular coordinates The equation is Let be the solution of equation Then In equation all are independent to each other hence each may be seperately equal to some constant, i.e., or, and Thus, the general solution of equation is  where .  Alternative solution of equation is      In Cylindrical Coordinates   cylindrical coordinates We have, Let be the solution of eqn. . Hence, As variables are separated, we may take - or, and also, and Now put so that and therefore equation reduces to or, which is Bessel's equation and it's general solution is given as or, since be finite at , we have or, Hence,     In Spherical Coordinates    or,  Suppose, be its solution. Then,  considering eqn. , and  or, and As equation being the homogenous, put , hence equation reduces to where, . or, or, or,  again, if we put in equation , then since or, we have, Now, which is Legendre's associated differential equational and hence has the solution, Now as is the function of , then solution of equation is in the form The summing over all , the general solution of equation may be written as    Note 1. If , then equation reduces to Legendre's equation, also, Thus, so that  In case under specific boundary conditions, then     Note 2. If there is axial symmetry about z - axis, then depens only upon and so that in equation , If ,    "
},
{
  "id": "subsubsec-3D_lalpsph-3",
  "level": "2",
  "url": "subsec-3D_lapleq.html#subsubsec-3D_lalpsph-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Note 1. "
},
{
  "id": "subsubsec-3D_lalpsph-4",
  "level": "2",
  "url": "subsec-3D_lapleq.html#subsubsec-3D_lalpsph-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Note 2. "
},
{
  "id": "sec_seventh-examplesB",
  "level": "1",
  "url": "sec_seventh-examplesB.html",
  "type": "Section",
  "number": "7.4",
  "title": "ExamplesB",
  "body": " ExamplesB    Find the temperature distribution in the bar if bar and its ends are perfactly insulated, i.e., and initial temperature is .    Let the heat eqn. is and be the solution of eqn. . Then by making substitution of eqn. into eqn. , we get the solution as or, putting at in eqn. , we get - Therefore, eqn. reduces to and putting at in eqn. , we have - or, or, on putting the value of in eqn. , we have - which is the required solution of eqn. . Now, for initial condition, eqn. becomes and       A rod of length with insulated sides is initially at a uniform temperature . Its ends are suddenly cooled to and maintained at this temperature. Prove that the temperature function is given by where is determined from the equation     Let the heat equation be and solution of which is given by The boundary conditions at , we get - again, at , we have - since can not be zero. or, where . Now eqn. becomes -  which is the required solution of eqn. . By initial condition at , we have-      Laplace Equation    A rectangular plate bounded by the lines has an initial distribution of temperature given by     The general solution is given as where    so that and Hence the solution is       Determine the steady state temperature in a rectangular plate of length and width with sides maintained at a temperature zero while the lower end is kept at temperature and the upper one is insulated.    The equation of steady state heat flow is given by The boundary conditions are given as                   The solution of this problem is obtained as from condition (iii), we have - and from condition (iv) -  Hence,       To find the steady state temperature distribution in a thin plate bounded by the lines , the sides are kept at temperature zero, the side is kept at temperature and the edge at temperature zero.     The boundary conditions are and The steady state heat equation is given by Let be the solution of eqn. . Substituting of eqn. into eqn. , we get -   and    from boundary condition   from boundary condition . also, or, Hence, again from        To find the steady temperature distribution in a thin rectangular plate bounded by the lines the edges are kept at temperature zero while the edge is kept at temp. .     The boundary conditions are The steady state heat eqn. is The solution of eqn. is given by Now also   or, again, Hence,  using the last boundary condition - or,       The diameter of a semi - circular plate of radius is kept at and temperature at the semi - circular boundary is at . Find the steady state temperature in the plate.     The boundary conditions are     , when for ,     is finite, when ,     , when for .    The solution of this problem is  But is finite when . Eqn. must not contain terms of and and this will be so when . Thus eqn. reduces to from condition (i), . Hence, from condition (iii), from which we can find and  Hence, the required solution is      "
},
{
  "id": "sec_seventh-examplesB-2",
  "level": "2",
  "url": "sec_seventh-examplesB.html#sec_seventh-examplesB-2",
  "type": "Example",
  "number": "7.4.1",
  "title": "",
  "body": "  Find the temperature distribution in the bar if bar and its ends are perfactly insulated, i.e., and initial temperature is .    Let the heat eqn. is and be the solution of eqn. . Then by making substitution of eqn. into eqn. , we get the solution as or, putting at in eqn. , we get - Therefore, eqn. reduces to and putting at in eqn. , we have - or, or, on putting the value of in eqn. , we have - which is the required solution of eqn. . Now, for initial condition, eqn. becomes and    "
},
{
  "id": "sec_seventh-examplesB-3",
  "level": "2",
  "url": "sec_seventh-examplesB.html#sec_seventh-examplesB-3",
  "type": "Example",
  "number": "7.4.2",
  "title": "",
  "body": "  A rod of length with insulated sides is initially at a uniform temperature . Its ends are suddenly cooled to and maintained at this temperature. Prove that the temperature function is given by where is determined from the equation     Let the heat equation be and solution of which is given by The boundary conditions at , we get - again, at , we have - since can not be zero. or, where . Now eqn. becomes -  which is the required solution of eqn. . By initial condition at , we have-    "
},
{
  "id": "sec_seventh-examplesB-4-2",
  "level": "2",
  "url": "sec_seventh-examplesB.html#sec_seventh-examplesB-4-2",
  "type": "Example",
  "number": "7.4.3",
  "title": "",
  "body": "  A rectangular plate bounded by the lines has an initial distribution of temperature given by     The general solution is given as where    so that and Hence the solution is    "
},
{
  "id": "sec_seventh-examplesB-4-3",
  "level": "2",
  "url": "sec_seventh-examplesB.html#sec_seventh-examplesB-4-3",
  "type": "Example",
  "number": "7.4.4",
  "title": "",
  "body": "  Determine the steady state temperature in a rectangular plate of length and width with sides maintained at a temperature zero while the lower end is kept at temperature and the upper one is insulated.    The equation of steady state heat flow is given by The boundary conditions are given as                   The solution of this problem is obtained as from condition (iii), we have - and from condition (iv) -  Hence,    "
},
{
  "id": "sec_seventh-examplesB-4-4",
  "level": "2",
  "url": "sec_seventh-examplesB.html#sec_seventh-examplesB-4-4",
  "type": "Example",
  "number": "7.4.5",
  "title": "",
  "body": "  To find the steady state temperature distribution in a thin plate bounded by the lines , the sides are kept at temperature zero, the side is kept at temperature and the edge at temperature zero.     The boundary conditions are and The steady state heat equation is given by Let be the solution of eqn. . Substituting of eqn. into eqn. , we get -   and    from boundary condition   from boundary condition . also, or, Hence, again from     "
},
{
  "id": "sec_seventh-examplesB-4-5",
  "level": "2",
  "url": "sec_seventh-examplesB.html#sec_seventh-examplesB-4-5",
  "type": "Example",
  "number": "7.4.6",
  "title": "",
  "body": "  To find the steady temperature distribution in a thin rectangular plate bounded by the lines the edges are kept at temperature zero while the edge is kept at temp. .     The boundary conditions are The steady state heat eqn. is The solution of eqn. is given by Now also   or, again, Hence,  using the last boundary condition - or,    "
},
{
  "id": "sec_seventh-examplesB-4-6",
  "level": "2",
  "url": "sec_seventh-examplesB.html#sec_seventh-examplesB-4-6",
  "type": "Example",
  "number": "7.4.7",
  "title": "",
  "body": "  The diameter of a semi - circular plate of radius is kept at and temperature at the semi - circular boundary is at . Find the steady state temperature in the plate.     The boundary conditions are     , when for ,     is finite, when ,     , when for .    The solution of this problem is  But is finite when . Eqn. must not contain terms of and and this will be so when . Thus eqn. reduces to from condition (i), . Hence, from condition (iii), from which we can find and  Hence, the required solution is    "
},
{
  "id": "ex_seventh",
  "level": "1",
  "url": "ex_seventh.html",
  "type": "Exercises",
  "number": "7.5",
  "title": "Exercise",
  "body": "  Exercise  Using the transformations and , solve the following,        Find the solution of the equation of a vibrating string of length satisfying the initial conditions and when . It is assumed that the equation of a vibrating string is     and    A tightly stretched string of length fastened at both ends, is disturbed from the position of equilibrium by imparting to each of its points an initial velocity of magnitude . Show that the solution of the problem is   Find the solution of the equation subject to the boundary conditions and       The vibration of an elastic string of length are governed by the one - dimensional wave equation The string is fixed at the ends, for all . The initial deflection is and the initial velocity is zero. Find the deflection of the string at any instant of time.      Find the solution of for which by the method of variables separable.      Solve when for and or, .      Solve under the boundary conditions and       Find the temperature in a bar of length perfactly insulated and whose ends are kept at temp. zero while the initial temp. is given by       The heat flow in a bar of length 10 cm of homogeneous material is governed by the partial differential equation The ends of the bar are kept at temperature , and the initial temperature is . Find the temperature in the bar at any instant of time.   where is odd.   Heat flows in a semi - infinite rectangular plate, the end is kept at temp. and the edges and at temp. zero, then show that the temp. at any point is given by   A square plate has its faces and its edges and for is insulated. Its edges and are kept at temperatures zero and respectively. Show that the steady temperature is given by where   Solve for under the boundary conditions        The boundary of a semi - circular plate of radius is kept at temperature while the diameter of the plate is maintained at . Find the steady state temperature distribution of the plate assuming the lateral surfaces of the plate to be insulated.      "
},
{
  "id": "ex_seventh-2",
  "level": "2",
  "url": "ex_seventh.html#ex_seventh-2",
  "type": "Exercise",
  "number": "7.5.1",
  "title": "",
  "body": "Using the transformations and , solve the following,       "
},
{
  "id": "ex_seventh-3",
  "level": "2",
  "url": "ex_seventh.html#ex_seventh-3",
  "type": "Exercise",
  "number": "7.5.2",
  "title": "",
  "body": "Find the solution of the equation of a vibrating string of length satisfying the initial conditions and when . It is assumed that the equation of a vibrating string is     and   "
},
{
  "id": "ex_seventh-4",
  "level": "2",
  "url": "ex_seventh.html#ex_seventh-4",
  "type": "Exercise",
  "number": "7.5.3",
  "title": "",
  "body": "A tightly stretched string of length fastened at both ends, is disturbed from the position of equilibrium by imparting to each of its points an initial velocity of magnitude . Show that the solution of the problem is  "
},
{
  "id": "ex_seventh-5",
  "level": "2",
  "url": "ex_seventh.html#ex_seventh-5",
  "type": "Exercise",
  "number": "7.5.4",
  "title": "",
  "body": "Find the solution of the equation subject to the boundary conditions and      "
},
{
  "id": "ex_seventh-6",
  "level": "2",
  "url": "ex_seventh.html#ex_seventh-6",
  "type": "Exercise",
  "number": "7.5.5",
  "title": "",
  "body": "The vibration of an elastic string of length are governed by the one - dimensional wave equation The string is fixed at the ends, for all . The initial deflection is and the initial velocity is zero. Find the deflection of the string at any instant of time.     "
},
{
  "id": "ex_seventh-7",
  "level": "2",
  "url": "ex_seventh.html#ex_seventh-7",
  "type": "Exercise",
  "number": "7.5.6",
  "title": "",
  "body": "Find the solution of for which by the method of variables separable.     "
},
{
  "id": "ex_seventh-8",
  "level": "2",
  "url": "ex_seventh.html#ex_seventh-8",
  "type": "Exercise",
  "number": "7.5.7",
  "title": "",
  "body": "Solve when for and or, .     "
},
{
  "id": "ex_seventh-9",
  "level": "2",
  "url": "ex_seventh.html#ex_seventh-9",
  "type": "Exercise",
  "number": "7.5.8",
  "title": "",
  "body": "Solve under the boundary conditions and      "
},
{
  "id": "ex_seventh-10",
  "level": "2",
  "url": "ex_seventh.html#ex_seventh-10",
  "type": "Exercise",
  "number": "7.5.9",
  "title": "",
  "body": "Find the temperature in a bar of length perfactly insulated and whose ends are kept at temp. zero while the initial temp. is given by      "
},
{
  "id": "ex_seventh-11",
  "level": "2",
  "url": "ex_seventh.html#ex_seventh-11",
  "type": "Exercise",
  "number": "7.5.10",
  "title": "",
  "body": "The heat flow in a bar of length 10 cm of homogeneous material is governed by the partial differential equation The ends of the bar are kept at temperature , and the initial temperature is . Find the temperature in the bar at any instant of time.   where is odd.  "
},
{
  "id": "ex_seventh-12",
  "level": "2",
  "url": "ex_seventh.html#ex_seventh-12",
  "type": "Exercise",
  "number": "7.5.11",
  "title": "",
  "body": "Heat flows in a semi - infinite rectangular plate, the end is kept at temp. and the edges and at temp. zero, then show that the temp. at any point is given by  "
},
{
  "id": "ex_seventh-13",
  "level": "2",
  "url": "ex_seventh.html#ex_seventh-13",
  "type": "Exercise",
  "number": "7.5.12",
  "title": "",
  "body": "A square plate has its faces and its edges and for is insulated. Its edges and are kept at temperatures zero and respectively. Show that the steady temperature is given by where  "
},
{
  "id": "ex_seventh-14",
  "level": "2",
  "url": "ex_seventh.html#ex_seventh-14",
  "type": "Exercise",
  "number": "7.5.13",
  "title": "",
  "body": "Solve for under the boundary conditions       "
},
{
  "id": "ex_seventh-15",
  "level": "2",
  "url": "ex_seventh.html#ex_seventh-15",
  "type": "Exercise",
  "number": "7.5.14",
  "title": "",
  "body": "The boundary of a semi - circular plate of radius is kept at temperature while the diameter of the plate is maintained at . Find the steady state temperature distribution of the plate assuming the lateral surfaces of the plate to be insulated.     "
},
{
  "id": "meta_backmatter-2",
  "level": "1",
  "url": "meta_backmatter-2.html",
  "type": "Appendix",
  "number": "A",
  "title": "List of Symbols",
  "body": " List of Symbols   "
},
{
  "id": "append_partdiff",
  "level": "1",
  "url": "append_partdiff.html",
  "type": "Appendix",
  "number": "B",
  "title": "The partial differential equation",
  "body": " The partial differential equation   can be converted into the polar coordinates polar coordinates by the parameters so that and then,  Thus,   i.e., similarly,   also,   and   Hence,   "
},
{
  "id": "meta_backmatter-4",
  "level": "1",
  "url": "meta_backmatter-4.html",
  "type": "Appendix",
  "number": "C",
  "title": "Laplace’s equation in cylindrical coordinates",
  "body": " Laplace's equation in cylindrical coordinates  Let us consider the point P having cartesian coordinates and cylindrical coordinates cylindrical coordinates  , then so that and      Cylindrical Coordinate    Now,     so the operator and    or, and    and adding eqns. , , and , we get - Hence, Laplace's differential equation in cylindrical coordinates is Laplace's Equation  and   "
},
{
  "id": "fig-fig715",
  "level": "2",
  "url": "meta_backmatter-4.html#fig-fig715",
  "type": "Figure",
  "number": "C.0.1",
  "title": "",
  "body": " Cylindrical Coordinate   "
},
{
  "id": "meta_backmatter-5",
  "level": "1",
  "url": "meta_backmatter-5.html",
  "type": "Appendix",
  "number": "D",
  "title": "Laplace’s equation in spherical coordinates",
  "body": " Laplace's equation in spherical coordinates  Let us consider a point p having cartesian coordinates and spherical coordinates spherical coordinates  , then  and , so that,  and also,        Spherical Coordinate       Now,   Thus the operator,          also,  Thus,           again  Hence, and   with the help of eqns. , , and , we get -  Thus the Laplace's differential equation in spherical coordinates is given by Laplace's equation  or,   "
},
{
  "id": "fig-fig716",
  "level": "2",
  "url": "meta_backmatter-5.html#fig-fig716",
  "type": "Figure",
  "number": "D.0.1",
  "title": "",
  "body": " Spherical Coordinate   "
},
{
  "id": "meta_backmatter-6",
  "level": "1",
  "url": "meta_backmatter-6.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "refs-list",
  "level": "1",
  "url": "refs-list.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": " Mathematical Methods for Physicists, Arfken, Weber, Academic Press, 2005.  Mathematical Methods of Physics, Mathews, Walker, Addison-Wesley, 1970.  Mmathematical Methods in the Physical Sciences, Boas, Wiley & Sons, 2006.  Methods of mathematical physics, Courant, Richard, and Hilbert, David, CUP Archive, 1996.  Mathematical physics: a modern introduction to its foundations, Hassani, Sadri, Springer Science, 2013  Tensor algebra and tensor analysis for engineers: With applications to continuum mechanics, Itskov, Mikhail, Springer, 2015  Fourier transforms, Sneddon, Ian Naismith, Courier Corporation 1995  Mathematical Physics, Anand, Mittal, and Wadhwa, Har Anand Publications, 1995  Partial differential equations, Wazwaz, Abdul-Majid, CRC Press, 2002.  Matrices and tensors in physics, Joshi, Avinash Wasudeo, New Age International, 1995.  "
},
{
  "id": "meta_backmatter-8",
  "level": "1",
  "url": "meta_backmatter-8.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
